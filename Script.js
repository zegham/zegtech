// Variables to store product prices
let BS112_price = 120;
let BS113_price = 150;
let BS114_price = 130;

// Cart counts for each product
let BS112_count = 0;
let BS113_count = 0;
let BS114_count = 0;

// Main cart total price
let mainCartTotal = 0;

// Function to update the cart count and price
function addToCart(productCode) {
    let productCount = 0;
    let productPrice = 0;
    let productCountDisplay = null;

    if (productCode === 'BS112') {
        if (BS112_count < 50) {
            BS112_count++;
            productCount = BS112_count;
            productPrice = BS112_price * productCount;
            productCountDisplay = document.getElementById('BS112-cart-count');
        }
    } else if (productCode === 'BS113') {
        if (BS113_count < 50) {
            BS113_count++;
            productCount = BS113_count;
            productPrice = BS113_price * productCount;
            productCountDisplay = document.getElementById('BS113-cart-count');
        }
    } else if (productCode === 'BS114') {
        if (BS114_count < 50) {
            BS114_count++;
            productCount = BS114_count;
            productPrice = BS114_price * productCount;
            productCountDisplay = document.getElementById('BS114-cart-count');
        }
    }

    // Update the count display next to the cart button
    if (productCountDisplay) {
        productCountDisplay.innerHTML = productCount;
    }

    // Update the main cart total
    updateMainCart();
}

// Function to update the main cart total
function updateMainCart() {
    mainCartTotal = (BS112_count * BS112_price) + (BS113_count * BS113_price) + (BS114_count * BS114_price);
    document.getElementById('mainCart').innerHTML = 'Main Cart: $' + mainCartTotal;
}

// Function to validate email format
function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to handle login form submission
function handleLoginSubmit() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }
    // Store name and email in variables for later use
    let userName = name;
    let userEmail = email;
    console.log('User Name:', userName);
    console.log('User Email:', userEmail);
    alert('Login successful!');
    return false; // Prevent actual form submission for demo purposes
}
