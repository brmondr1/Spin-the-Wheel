let purchasedItems = []; // Will store names or IDs of purchased items

// Function to add a new item to the inventory
const inventoryGrid = document.getElementById('inventory-grid');
function addItemToInventory(itemName) {
    purchasedItems.push(itemName);

// Create the visual slots for the inventory
const itemSlot = document.createElement('div');
itemSlot.classList.add('inventory-item-slot');
itemSlot.style.display = "block"; // Ensure slots are visible

inventoryGrid.appendChild(itemSlot);
}

// simulate buying an item
setTimeout(() => addItemToInventory("Item 1"), 1000);
setTimeout(() => addItemToInventory("Item 2"), 2000);
setTimeout(() => addItemToInventory("Item 3"), 3000);