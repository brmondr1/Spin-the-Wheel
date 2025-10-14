let money = 0;

const clickArea = document.getElementById('clickArea');
const moneyDisplay = document.getElementById('money');

clickArea.addEventListener('click', (e) => {
    money += 1;
    moneyDisplay.textContent = money;

    // Create floating text animation
    const floatText = document.createElement('div');
    floatText.textContent = "+1 💰";
    floatText.classList.add('float-text');

    // Position the floating text at the click location
    floatText.style.left = `${e.pageX}px`;
    floatText.style.top = `${e.pageY}px`;

    // Append the floating text to the body
    document.body.appendChild(floatText);

    // Remove the floating text after the animation duration
    setTimeout(() => floatText.remove(), 1000);
});