document.addEventListener('keydown', function(event) {
    if (event.key === 'F12' || (event.ctrlKey && event.shiftKey && event.key === 'I')) {
        event.preventDefault();
    }
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('copy', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'U') {
        event.preventDefault();
    }
});
