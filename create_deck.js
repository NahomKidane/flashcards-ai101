const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const DECKS_DIR = path.join(__dirname, 'decks');
const INDEX_FILE = path.join(__dirname, 'index.html');

console.log("=== Flashcard Deck Creator ===");

rl.question('Enter the name of the new deck (e.g. "Neural Networks"): ', (deckName) => {
    rl.question('Enter a short description (e.g. "Intro to Perceptrons and layers"): ', (deckDesc) => {
        rl.question('Enter a safe filename (e.g. "02_neural_networks"): ', (filename) => {

            // 1. Create Data File
            const dataContent = `/**
 * ${deckName} Flashcard Data
 */
const allFlashcards = [
    { topic: '${deckName}', question: 'Sample Question 1?', answer: 'Sample Answer 1' },
    { topic: '${deckName}', question: 'Sample Question 2?', answer: 'Sample Answer 2' },
];
`;
            const dataPath = path.join(DECKS_DIR, `${filename}_data.js`);
            fs.writeFileSync(dataPath, dataContent);
            console.log(`✅ Created data file: ${dataPath}`);

            // 2. Create HTML File
            const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${deckName} Flashcards</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <a href="../index.html" class="home-link">
        <span>←</span> Dashboard
    </a>
    <div class="container">
        <div class="header">
            <h1>${deckName}</h1>
            <p>${deckDesc}</p>
        </div>

        <div class="topic-selection" id="topicSelection">
            <div class="topic-title">Select Topics to Study</div>
            <div class="topic-controls">
                <button class="btn-select-all" id="selectAllBtn">Select All</button>
                <button class="btn-clear-all" id="clearAllBtn">Clear All</button>
            </div>
            <button class="btn-start" id="startBtn" disabled>Start Studying</button>
            <div class="topics-grid" id="topicsGrid"></div>
        </div>

        <div class="study-screen" id="studyScreen">
            <div class="progress-bar"><div class="progress-fill"></div></div>
            <div class="card-container">
                <div class="card">
                    <div class="card-side card-front">
                        <div class="card-content">
                            <div class="card-topic" id="frontTopic"></div>
                            <div class="card-label">Question</div>
                            <div class="card-text">Loading...</div>
                        </div>
                    </div>
                    <div class="card-side card-back">
                        <div class="card-content">
                            <div class="card-label">Answer</div>
                            <div class="card-text">Loading...</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="controls">
                <button class="btn-nav" id="prevBtn">← Previous</button>
                <button class="btn-flip" id="flipBtn">Flip Card</button>
                <button class="btn-nav" id="nextBtn">Next →</button>
            </div>
            <div class="stats">Card <span id="currentCard">1</span> of <span id="totalCards">0</span></div>
            <div class="controls"><button class="btn-back-topics" id="backTopicsBtn">← Back to Topics</button></div>
            <div class="keyboard-hint">💡 Use arrow keys to navigate · Space to flip</div>
        </div>
    </div>

    <script src="${filename}_data.js"></script>
    <script src="app.js"></script>
</body>
</html>`;
            const htmlPath = path.join(DECKS_DIR, `${filename}.html`);
            fs.writeFileSync(htmlPath, htmlContent);
            console.log(`✅ Created HTML file: ${htmlPath}`);

            // 3. Update Index.html
            let indexContent = fs.readFileSync(INDEX_FILE, 'utf8');
            const newLink = `
      <a href="decks/${filename}.html" class="deck-card">
        <div>
          <div class="deck-title">${deckName}</div>
          <div class="deck-info">
            ${deckDesc}
          </div>
        </div>
        <div class="deck-link-icon">Start Studying →</div>
      </a>
`;
            // Insert before the closing </div> of deck-grid
            const gridEndIndex = indexContent.lastIndexOf('</div>');
            // We need to find the SPECIFIC closing div for deck-grid. 
            // The file structure is <div class="deck-grid"> ... </div> ... </div>
            // A clearer marker is to look for the last </a> tag and insert after it, or finding class="deck-grid" and matching braces.
            // Simple approach: Replace '<!-- Deck 1 -->' if we had a marker, but searching for the closing tag of the grid is safer if we know the indentation.
            // Actually, since we know the content, we can search for the last </a> in the grid and append after it.

            // Better Regex approach to find the closing tag of .deck-grid
            if (indexContent.includes('<div class="deck-grid">')) {
                const gridStart = indexContent.indexOf('<div class="deck-grid">');
                const gridEnd = indexContent.indexOf('</div>', gridStart); // simplistic, might fail if nested divs

                // Let's use a safer injection point: append to the end of the content inside deck-grid
                // We'll search for the last occurrence of </a> and insert after it?
                // Or just replace '    </div>' (indentation 4 spaces) which is likely the closing tag.
                // In the file provided, line 111 is '    </div>' which closes deck-grid.
                // We can't rely on line numbers.

                // Strategy: Find class="deck-grid" and then the next </div> that matches its indentation level?
                // Or simply: regex replace `(class="deck-grid">[\s\S]*?)(</div>)`

                const updatedIndex = indexContent.replace(/(<div class="deck-grid">[\s\S]*?)(    <\/div>)/, `$1${newLink}$2`);

                if (updatedIndex !== indexContent) {
                    fs.writeFileSync(INDEX_FILE, updatedIndex);
                    console.log(`✅ Updated index.html with new link.`);
                } else {
                    console.log(`⚠️ Could not auto-update index.html. Please add the link manually.`);
                }
            }

            rl.close();
        });
    });
});
