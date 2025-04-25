// Event Listeners Section
const interactiveBox = document.getElementById('interactive-box');
const resetBoxBtn = document.getElementById('reset-box');

// Mouse events
interactiveBox.addEventListener('mouseenter', () => {
    interactiveBox.textContent = "Mouse entered!";
    interactiveBox.style.backgroundColor = '#3498db';
});

interactiveBox.addEventListener('mouseleave', () => {
    interactiveBox.textContent = "Mouse left!";
    interactiveBox.style.backgroundColor = '#e74c3c';
    setTimeout(() => {
        if (interactiveBox.textContent === "Mouse left!") {
            interactiveBox.textContent = "Hover or Click Me!";
        }
    }, 1000);
});

interactiveBox.addEventListener('click', () => {
    interactiveBox.textContent = "Clicked!";
    interactiveBox.style.transform = 'scale(0.9)';
    interactiveBox.style.backgroundColor = '#2ecc71';
});

interactiveBox.addEventListener('dblclick', () => {
    interactiveBox.textContent = "Double Clicked!";
    interactiveBox.style.transform = 'scale(1.1)';
    interactiveBox.style.backgroundColor = '#9b59b6';
});

// Keyboard events
document.addEventListener('keydown', (e) => {
    interactiveBox.textContent = `Key pressed: ${e.key}`;
    interactiveBox.style.backgroundColor = '#f1c40f';
});

// Reset button
resetBoxBtn.addEventListener('click', () => {
    interactiveBox.textContent = "Hover or Click Me!";
    interactiveBox.style.backgroundColor = '#e74c3c';
    interactiveBox.style.transform = 'scale(1)';
});

// Form Validation Section
const form = document.getElementById('demo-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    
    // Validate name
    if (nameInput.value.trim().length < 3) {
        document.getElementById('name-error').textContent = 'Name must be at least 3 characters';
        document.getElementById('name-error').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('name-error').classList.add('hidden');
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email';
        document.getElementById('email-error').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('email-error').classList.add('hidden');
    }
    
    // Validate password
    if (passwordInput.value.length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters';
        document.getElementById('password-error').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('password-error').classList.add('hidden');
    }
    
    // Validate message
    if (messageInput.value.length > 200) {
        document.getElementById('message-error').textContent = 'Message must be less than 200 characters';
        document.getElementById('message-error').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('message-error').classList.add('hidden');
    }
    
    // If form is valid
    if (isValid) {
        document.getElementById('form-success').classList.remove('hidden');
        form.reset();
        setTimeout(() => {
            document.getElementById('form-success').classList.add('hidden');
        }, 3000);
    }
});

// Interactive Elements Section
// Color Picker
const colorOptions = document.querySelectorAll('.color-option');
colorOptions.forEach(option => {
    option.addEventListener('click', () => {
        document.body.style.backgroundColor = option.dataset.color;
    });
});

// Counter
const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');
let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});

decrementBtn.addEventListener('click', () => {
    count--;
    counter.textContent = count;
});

resetBtn.addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
});

// Toggle Content
const toggleBtn = document.getElementById('toggle-btn');
const secretMessage = document.getElementById('secret-message');

toggleBtn.addEventListener('click', () => {
    secretMessage.classList.toggle('hidden');
    toggleBtn.textContent = secretMessage.classList.contains('hidden') 
        ? 'Show Secret Message' 
        : 'Hide Secret Message';
});