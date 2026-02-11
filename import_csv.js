const fs = require('fs');
const path = require('path');
const readline = require('readline');

// CONFIGURATION
const CSV_FILENAME = 'flashcards.csv'; // The source CSV file
const OUTPUT_JS_FILENAME = 'decks/generated_data.js'; // The output JS file
const VARIABLE_NAME = 'allFlashcards'; // The variable name in the JS file

// Path resolution
const csvPath = path.join(__dirname, CSV_FILENAME);
const outputPath = path.resolve(__dirname, OUTPUT_JS_FILENAME);

// Simple CSV Parser (handling quoted fields)
function parseCSVLine(text) {
    const result = [];
    let cell = '';
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char === '"') {
            // Toggle quotes
            if (inQuotes && text[i + 1] === '"') {
                // Escaped quote ("")
                cell += '"';
                i++;
            } else {
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            // End of cell
            result.push(cell.trim());
            cell = '';
        } else {
            cell += char;
        }
    }
    result.push(cell.trim());
    return result;
}

async function convertCsvToJs() {
    if (!fs.existsSync(csvPath)) {
        console.error(`❌ Error: Could not find CSV file at: ${csvPath}`);
        console.log(`Please create a file named "${CSV_FILENAME}" with headers: Topic, Question, Answer`);
        process.exit(1);
    }

    const fileStream = fs.createReadStream(csvPath);
    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    const cards = [];
    let headers = [];
    let isHeader = true;

    console.log(`Reading from ${CSV_FILENAME}...`);

    for await (const line of rl) {
        if (!line.trim()) continue; // Skip empty lines

        const columns = parseCSVLine(line);

        if (isHeader) {
            // Normalize headers to lowercase to be case-insensitive
            headers = columns.map(h => h.toLowerCase());
            isHeader = false;

            // Validate headers
            if (!headers.includes('question') || !headers.includes('answer')) {
                console.error('❌ Error: CSV must contain "Question" and "Answer" columns.');
                process.exit(1);
            }
            continue;
        }

        // Map columns to object based on headers
        const card = {};
        let hasContent = false;

        headers.forEach((header, index) => {
            if (columns[index]) {
                const value = columns[index];
                if (header === 'topic' || header === 'category') card.topic = value;
                if (header === 'question') card.question = value;
                if (header === 'answer') card.answer = value;
                hasContent = true;
            }
        });

        if (hasContent && card.question && card.answer) {
            // Default topic if missing
            if (!card.topic) card.topic = 'General';
            cards.push(card);
        }
    }

    // Generate JS content
    const jsContent = `
const ${VARIABLE_NAME} = ${JSON.stringify(cards, null, 4)};
`;

    fs.writeFileSync(outputPath, jsContent);
    console.log(`✅ Success! Converted ${cards.length} flashcards.`);
    console.log(`📄 Saved to: ${OUTPUT_JS_FILENAME}`);
}

convertCsvToJs();
