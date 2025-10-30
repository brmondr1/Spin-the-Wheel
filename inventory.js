const inventoryEl = document.getElementById('inventory');

const purchasedItems = [
    { name: "Car", image: "images/car.png" },
    { name: "Dawg", image: "images/puppy.png" },
    { name: "Kirby", image: "images/kirby.png" },
    { name: "One Ugly Shoe", image: "images/one ugly shoe.png" },
];

// Clear existing inventory items
inventoryEl.innerHTML = '';

// Only show purchased images
purchasedItems.forEach(item => {
    const slot = document.createElement('div');
    slot.classList.add('item-slot');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;

    slot.appendChild(img);
    inventoryEl.appendChild(slot);
});