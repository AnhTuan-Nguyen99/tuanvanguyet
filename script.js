let noClickCount = 0;
let yesSize = 1.2;
let noSize = 1.2;

function handleYes() {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');

    if (noClickCount === 0) {
        popupText.textContent = "Không chọn bên kia trước à :))";
        popup.style.display = 'flex';
    } else {
        popupText.textContent = "Anh cũng yêu em ❤️";
        popup.style.display = 'flex';
    }
}

function handleNo() {
    noClickCount++;
    noSize -= 0.2;
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    noBtn.style.fontSize = `${noSize}em`;
    yesBtn.style.fontSize = `${yesSize}em`;
    if (noSize <= 0) {
        noBtn.style.display = 'none';
    } else {
        yesSize += 0.2;
    }
}

function closePopup() {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popupText');
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');

    if (popupText.textContent === "Anh cũng yêu em ❤️") {
        noClickCount = 0;
        yesSize = 1.2;
        noSize = 1.2;
        noBtn.style.display = 'block';
        noBtn.style.fontSize = `${noSize}em`;
        yesBtn.style.fontSize = `${yesSize}em`;
    }
    popup.style.display = 'none';
}

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.innerHTML = '🌸';
    const leftPosition = Math.random() * 100;
    petal.style.left = `${leftPosition}%`;
    const duration = 4 + Math.random() * 2;
    petal.style.animationDuration = `${duration}s`;
    document.querySelector('.petals').appendChild(petal);
    petal.addEventListener('animationend', () => {
        petal.remove();
    });
}

setInterval(createPetal, 300);