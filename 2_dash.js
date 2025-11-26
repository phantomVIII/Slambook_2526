// DRAG SCROLLING (same as before)
const slider = document.getElementById('cardSlider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2; 
    slider.scrollLeft = scrollLeft - walk;
});

let x='';
// ===============================
// CARD CLICK → SEND NAME TO JS FILE
// ===============================
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click', () => {

        const name = card.getAttribute('data-name');

        console.log("Card clicked:", name);
        window.location.href = `3_view.html?name=${encodeURIComponent(name)}`;
        // You can call any function here
        
        x=name;
    });
});






