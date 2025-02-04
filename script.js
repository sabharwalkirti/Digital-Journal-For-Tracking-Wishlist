document.addEventListener("DOMContentLoaded", () => {
    const addItemBtn = document.getElementById("addItemBtn");
    const modal = document.getElementById("itemModal");
    const closeBtn = document.querySelector(".close");
    const form = document.getElementById("itemForm");
    const wishlistItemsContainer = document.getElementById("wishlistItems");

    // Open modal when "Add Item" button is clicked
    addItemBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    // Close modal when "X" is clicked
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal if user clicks outside of modal content
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const itemName = document.getElementById("itemName").value;
        const itemImage = document.getElementById("itemImage").value;
        const itemDescription = document.getElementById("itemDescription").value;

        const newItem = document.createElement("div");
        newItem.classList.add("wishlist-item");

        newItem.innerHTML = `
            <h3>${itemName}</h3>
            <img src="${itemImage}" alt="${itemName}" width="200">
            <p>${itemDescription}</p>
        `;

        wishlistItemsContainer.appendChild(newItem);

        // Clear form and close modal
        form.reset();
        modal.style.display = "none";
    });
});
