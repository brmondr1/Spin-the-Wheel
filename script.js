let money = 0;

document.body.addEventListener('click', () => {
    money += 1; // Increase money by 1 per click

    document.getElementById('money').textContent = money;
});