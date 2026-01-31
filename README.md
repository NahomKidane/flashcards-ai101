# AI 101 Flashcards

A modular flashcard application designed to help students master Artificial Intelligence concepts. The application features a sleek, dark-themed UI with smooth animations and a responsive design.

## Features

-   **Modular Design**: Easily add new topics and decks without modifying the core logic.
-   **Topic Selection**: Users can select specific sub-topics to study within a deck.
-   **Dark Mode UI**: Professional, easy-on-the-eyes interface.
-   **Keyboard Support**: Navigate cards using Arrow Keys and Spacebar.
-   **Responsive**: Works seamlessly on mobile and desktop.
-   **Progress Tracking**: Live progress bar to track your study session.

## Getting Started

1.  Clone the repository.
2.  Open `index.html` in your web browser.
3.  Choose a module to start studying!

## Creating New Decks

This project includes an automation script to help you generate new decks quickly.

1.  Open your terminal in the project root.
2.  Run the command:
    ```bash
    node create_deck.js
    ```
3.  Follow the prompts to enter the Deck Name, Description, and Filename.
4.  The script will automatically generate the HTML and Data files and update your Dashboard.
5.  Open the newly created `decks/YOUR_FILE_data.js` to populate it with your questions.

## Project Structure

-   `index.html`: Main dashboard linking to all decks.
-   `create_deck.js`: Automation script for generating new decks.
-   `decks/`: Contains all flashcard modules.
    -   `01_ai_fundamentals.html`: Module 1 HTML structure.
    -   `ai_fundamentals_data.js`: Module 1 Question Data.
    -   `styles.css`: Shared styling for all decks.
    -   `app.js`: Shared application logic (flipping, navigation, etc.).

## Tech Stack

-   **HTML5**
-   **CSS3** (Variables, Flexbox, Grid, Transforms)
-   **Vanilla JavaScript** (ES6+)
-   **Node.js** (For the automation script)

## License

MIT