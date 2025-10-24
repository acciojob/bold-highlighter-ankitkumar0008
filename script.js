function highlight() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll('strong');

    // Change color of each <strong> element to green
    boldWords.forEach(word => {
        word.style.color = 'rgb(0, 128, 0)';
    });
}

function return_normal() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll('strong');

    // Change color of each <strong> element back to black
    boldWords.forEach(word => {
        word.style.color = 'rgb(0, 0, 0)';
    });
}
