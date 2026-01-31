const fs = require('fs');
const path = require('path');

const DECKS_DIR = path.join(__dirname, 'decks');
const OUTPUT_DIR = path.join(__dirname, 'canvas_export');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR);
}

// Helper to bundle a file
function bundleDeck(htmlFilename) {
    const htmlPath = path.join(DECKS_DIR, htmlFilename);
    if (!fs.existsSync(htmlPath)) return;

    let htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // 1. Inline CSS
    const stylesPath = path.join(DECKS_DIR, 'styles.css');
    const stylesContent = fs.readFileSync(stylesPath, 'utf8');
    htmlContent = htmlContent.replace('<link rel="stylesheet" href="styles.css">', `<style>${stylesContent}</style>`);

    // 2. Inline Data JS (find the specific data file)
    // The HTML has <script src="X_data.js"></script>. We need to find X_data.js.
    const dataRegex = /<script src="(.+?)"><\/script>/;
    const dataMatch = htmlContent.match(dataRegex);

    if (dataMatch) {
        const dataFilename = dataMatch[1]; // e.g. ai_fundamentals_data.js
        const dataPath = path.join(DECKS_DIR, dataFilename);
        if (fs.existsSync(dataPath)) {
            const dataJsContent = fs.readFileSync(dataPath, 'utf8');
            htmlContent = htmlContent.replace(dataMatch[0], `<script>${dataJsContent}</script>`);
        }
    }

    // 3. Inline App JS
    const appJsPath = path.join(DECKS_DIR, 'app.js');
    const appJsContent = fs.readFileSync(appJsPath, 'utf8');
    htmlContent = htmlContent.replace('<script src="app.js"></script>', `<script>${appJsContent}</script>`);

    // 4. Remove Navigation Link (Optional, but Canvas usually has its own nav)
    // Actually, keeping the "Home" link might be broken if "index.html" isn't uploaded. 
    // Let's replace the "../index.html" link with "#" or remove it to avoid confusion in Canvas.
    htmlContent = htmlContent.replace('<a href="../index.html" class="home-link">', '<a href="#" style="display:none;" class="home-link">');
    // Also hide the arrow/text inside just in case CSS doesn't catch it
    // But the above display:none style is inline so it should override.

    // 5. Save to output
    const outputFilename = `CANVAS_${htmlFilename}`;
    fs.writeFileSync(path.join(OUTPUT_DIR, outputFilename), htmlContent);
    console.log(`✅ Created standalone file for Canvas: canvas_export/${outputFilename}`);
}

// Find all HTML files in decks/
const files = fs.readdirSync(DECKS_DIR);
files.forEach(file => {
    if (path.extname(file) === '.html') {
        bundleDeck(file);
    }
});

console.log("\nDone! Upload these HTML files to your Canvas 'Files' section, or paste their code into a Page (HTML Editor).");
