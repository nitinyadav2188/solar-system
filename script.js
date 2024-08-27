// Select the scene container
const scene = document.querySelector('.scene');

// Variables to track dragging state and rotation angles
let isDragging = false;
let previousMouseX = 0;
let previousMouseY = 0;
let rotationX = 0;
let rotationY = 0;

// Mouse Events
scene.addEventListener('mousedown', (e) => {
    isDragging = true;
    scene.style.cursor = 'grabbing';
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMouseX;
    const deltaY = e.clientY - previousMouseY;
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;
    rotationY += deltaX * 0.5; // Horizontal movement affects Y-axis rotation
    rotationX -= deltaY * 0.5; // Vertical movement affects X-axis rotation
    scene.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    scene.style.cursor = 'grab';
});

scene.addEventListener('mouseleave', () => {
    isDragging = false;
    scene.style.cursor = 'grab';
});

// Touch Events for Mobile Devices
scene.addEventListener('touchstart', (e) => {
    isDragging = true;
    const touch = e.touches[0];
    previousMouseX = touch.clientX;
    previousMouseY = touch.clientY;
});

scene.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - previousMouseX;
    const deltaY = touch.clientY - previousMouseY;
    previousMouseX = touch.clientX;
    previousMouseY = touch.clientY;
    rotationY += deltaX * 0.5;
    rotationX -= deltaY * 0.5;
    scene.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
});

scene.addEventListener('touchend', () => {
    isDragging = false;
});
