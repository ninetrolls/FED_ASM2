document.addEventListener("DOMContentLoaded", function() {
    const cartItemsList = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const discountElement = document.getElementById("discount");

    // Function to update cart quantity and total price
    function updateCartQuantity(item, quantity) {
        item.quantity += quantity;
        item.quantity = Math.max(item.quantity, 0); // Ensure quantity is always non-negative
        const quantityElement = item.element.querySelector(".quantity");
        if (item.quantity === 0) {
            // Remove item from cart if quantity becomes zero
            cartData.splice(cartData.indexOf(item), 1);
            item.element.remove();
        } else {
            quantityElement.innerText = item.quantity;
        }

        // Update total price
        let totalPrice = 0;
        cartData.forEach(item => {
            totalPrice += item.price * item.quantity;
        });

        // Apply $5 discount for total over $200
        let discountApplied = 0;
        let discountMessage = "";

        if (totalPrice > 200) {
            discountApplied += 5; // Apply $7 discount for total over $200
            discountMessage += `Discount (Total > $200): $-7 `;
        }

        totalPrice -= discountApplied; // Deduct total discounts

        // Update elements
        totalPriceElement.innerText = totalPrice.toFixed(2);
        discountElement.innerText = discountMessage;

        // Update local storage
        localStorage.setItem("cart", JSON.stringify(cartData));
    }

    // Load cart data from local storage
    let cartData = JSON.parse(localStorage.getItem("cart")) || [];

    // Initialize quantity to 1 for items without quantity defined
    cartData.forEach(item => {
        item.quantity = item.quantity || 1;
    });

    // Populate cart with items and calculate total price
    cartData.forEach(item => {
        const li = document.createElement("li");
        const quantitySpan = document.createElement("span");
        quantitySpan.classList.add("quantity");
        quantitySpan.innerText = item.quantity; // Set quantity before appending buttons

        const plusButton = document.createElement("button");
        plusButton.innerText = "+";
        plusButton.addEventListener("click", function() {
            updateCartQuantity(item, 1); // Add 1 to the quantity when plus button is clicked
        });

        const minusButton = document.createElement("button");
        minusButton.innerText = "-";
        minusButton.addEventListener("click", function() {
            updateCartQuantity(item, -1); // Subtract 1 from the quantity when minus button is clicked
        });

        // Append elements
        li.innerText = `${item.name} - $${item.price}`;
        li.appendChild(minusButton);
        li.appendChild(quantitySpan);
        li.appendChild(plusButton);
        cartItemsList.appendChild(li);

        // Store the reference to the cart item element
        item.element = li;
    });

    // Calculate and display total price initially
    let totalPrice = 0;
    cartData.forEach(item => {
        totalPrice += item.price * item.quantity;
    });

    // Apply $5 discount for total over $200
    let discountApplied = 0;
    let discountMessage = "";

    if (totalPrice > 200) {
        discountApplied += 7; // Apply $5 discount for total over $200
        discountMessage += `Discount (Total > $200): $-7 `;
    }

    totalPrice -= discountApplied; // Deduct total discounts

    // Update elements
    totalPriceElement.innerText = totalPrice.toFixed(2);
    discountElement.innerText = discountMessage;
});
