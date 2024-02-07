// Get the product card template
const template = document.getElementById('product-card-template');
let allProducts; // To store all products

// Fetch all products from the API
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(products => {
    allProducts = products; // Store all products
    displayProducts(products); // Display all products initially
  })
  .catch(error => console.error(error));

// Function to filter products based on category
function filterProducts(category) {
    const filteredProducts = allProducts.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Function to display products
function displayProducts(products) {
    const productList = document.getElementById('product-cards');
    productList.innerHTML = ''; // Clear existing products

    products.forEach(product => {
        const card = template.content.cloneNode(true);

        card.querySelector('img').src = product.image;
        card.querySelector('.product-name').textContent = product.title;
        card.querySelector('.product-price').textContent = `$${product.price}`;

        productList.appendChild(card);
    });
}
//REWARDS PAGE
// Function to display the discount percentage
function displayDiscount() {
    document.getElementById("discount1").textContent = generateRandomDiscount() + "%";
    document.getElementById("discount2").textContent = generateRandomDiscount() + "%";
    document.getElementById("discount3").textContent = generateRandomDiscount() + "%";
    document.getElementById("discount4").textContent = generateRandomDiscount() + "%";
    document.getElementById("discount5").textContent = generateRandomDiscount() + "%";
    // Add more lines as needed for additional claim buttons
}

// Function to claim a voucher
function claimVoucher(button, voucherId) {
    // Check if the button has already been claimed
    if (button.classList.contains('claimed')) {
        return; // If already claimed, do nothing
    }
    
    // For demonstration purposes, let's generate a random discount voucher
    var discount = button.querySelector('.discount').textContent; // Extract discount from button text
    
    // Create a new list item to display the claimed voucher
    var listItem = document.createElement("li");
    listItem.textContent = "You have CLAIMED your " + discount + " discount voucher!";    

    // Add the claimed voucher to the list of claimed vouchers
    document.getElementById("claimedVouchers").appendChild(listItem);
    
    // Mark the button as claimed
    button.textContent = 'Claimed';
    button.classList.add('claimed');
    
    // Move the voucher div to the "Your Vouchers" section
    document.getElementById("claimedVouchers").appendChild(document.getElementById(voucherId));
}

// Function to generate a random discount voucher
function generateRandomDiscount() {
    // Generate a random discount percentage between 5% and 40%
    return Math.floor(Math.random() * (40 - 5 + 1)) + 5;
}

// Display initial discount percentages
displayDiscount();
