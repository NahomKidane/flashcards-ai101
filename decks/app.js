// Flashcard Application Logic

// Ensure allFlashcards is defined by the data script before this runs.
if (typeof allFlashcards === 'undefined') {
    console.error("Flashcard data not found. Please load the data script before this logic script.");
}

// Extract unique topics
const uniqueTopics = [...new Set(allFlashcards.map(card => card.topic))].sort();
let selectedTopics = new Set();
let filteredFlashcards = [];
let currentIndex = 0;
let isFlipped = false;

// Initialize topic selection
function initializeTopics() {
    const topicsGrid = document.getElementById('topicsGrid');
    if (!topicsGrid) return;

    topicsGrid.innerHTML = '';

    uniqueTopics.forEach(topic => {
        const btn = document.createElement('button');
        btn.className = 'topic-btn';
        btn.textContent = topic;
        btn.onclick = () => toggleTopic(topic, btn);
        topicsGrid.appendChild(btn);
    });
}

function toggleTopic(topic, btn) {
    if (selectedTopics.has(topic)) {
        selectedTopics.delete(topic);
        btn.classList.remove('selected');
    } else {
        selectedTopics.add(topic);
        btn.classList.add('selected');
    }
    updateStartButton();
}

function updateStartButton() {
    const startBtn = document.getElementById('startBtn');
    if (startBtn) {
        startBtn.disabled = selectedTopics.size === 0;
    }
}

// Event Listeners for Topic Selection
const selectAllBtn = document.getElementById('selectAllBtn');
if (selectAllBtn) {
    selectAllBtn.addEventListener('click', () => {
        selectedTopics = new Set(uniqueTopics);
        document.querySelectorAll('.topic-btn').forEach(btn => btn.classList.add('selected'));
        updateStartButton();
    });
}

const clearAllBtn = document.getElementById('clearAllBtn');
if (clearAllBtn) {
    clearAllBtn.addEventListener('click', () => {
        selectedTopics = new Set();
        document.querySelectorAll('.topic-btn').forEach(btn => btn.classList.remove('selected'));
        updateStartButton();
    });
}

const startBtn = document.getElementById('startBtn');
if (startBtn) {
    startBtn.addEventListener('click', startStudying);
}

function startStudying() {
    filteredFlashcards = allFlashcards.filter(card => selectedTopics.has(card.topic));
    currentIndex = 0;
    isFlipped = false;

    document.getElementById('topicSelection').classList.add('hidden');
    document.getElementById('studyScreen').classList.add('active');

    document.getElementById('totalCards').textContent = filteredFlashcards.length;
    updateCard();
}

const backTopicsBtn = document.getElementById('backTopicsBtn');
if (backTopicsBtn) {
    backTopicsBtn.addEventListener('click', () => {
        document.getElementById('studyScreen').classList.remove('active');
        document.getElementById('topicSelection').classList.remove('hidden');
    });
}

// Study screen controls
const card = document.querySelector('.card');
const cardFrontText = document.querySelector('.card-front .card-text');
const cardBackText = document.querySelector('.card-back .card-text');
const cardFrontTopic = document.getElementById('frontTopic');
const flipBtn = document.getElementById('flipBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentCardSpan = document.getElementById('currentCard');
const progressFill = document.querySelector('.progress-fill');

function updateCard() {
    if (filteredFlashcards.length === 0) return;

    const current = filteredFlashcards[currentIndex];
    isFlipped = false;
    card.classList.remove('flipped');
    cardFrontText.textContent = current.question;
    cardBackText.textContent = current.answer;
    cardFrontTopic.textContent = current.topic;
    currentCardSpan.textContent = currentIndex + 1;

    const progress = ((currentIndex + 1) / filteredFlashcards.length) * 100;
    progressFill.style.width = progress + '%';

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === filteredFlashcards.length - 1;
}

function flipCard() {
    card.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

function nextCard() {
    if (currentIndex < filteredFlashcards.length - 1) {
        currentIndex++;
        updateCard();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
}

// Event Listeners for Study Controls
if (flipBtn) flipBtn.addEventListener('click', flipCard);
if (nextBtn) nextBtn.addEventListener('click', nextCard);
if (prevBtn) prevBtn.addEventListener('click', prevCard);
if (card) card.addEventListener('click', flipCard);

// Keyboard controls
document.addEventListener('keydown', (e) => {
    const studyScreen = document.getElementById('studyScreen');
    if (studyScreen && studyScreen.classList.contains('active')) {
        if (e.key === ' ') {
            e.preventDefault();
            flipCard();
        } else if (e.key === 'ArrowRight') {
            nextCard();
        } else if (e.key === 'ArrowLeft') {
            prevCard();
        }
    }
});

// Initialize on load
document.addEventListener('DOMContentLoaded', initializeTopics);
