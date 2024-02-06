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