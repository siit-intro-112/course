console.log('Implementation using arrays');

// CONFIG
const options = ['🍔', `🍕`, '🥪', '🥗', '🍰','🌮', '🧁', '🍺', '🥂'];
const participants = ['Andreea', 'Ion', 'Adi', 'Alex', 'Iulia', 'Oana', 'Raluca'];

// IMPLEMENTATION
let i = 0;
while (i < participants.length) {
    const randomIndex = Math.floor(Math.random() * options.length);
    console.log(`${participants[i]} wins: ${options[randomIndex]}`);
    
    i++;
}