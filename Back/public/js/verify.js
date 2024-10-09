let showBlock = document.getElementById('showBlock');
let butVerify = document.getElementById('verify');
let contInf = document.getElementsByClassName('container')[0];
let inputCaptcha = document.getElementById('captureValue');
let refreshInput = document.getElementById('refreshCap');
let butCheck = document.getElementById('butSubmit');
let closeMessage = document.getElementById('closedCapMes')
let closMesBox= document.getElementsByClassName('box-messages')[0]
let closMesEror =document.getElementById('errorBox')
let closeEr = document.getElementById('closedCapMesEror')
let toggleSwitch = document.getElementById('toggle');
let bodyTag =document.getElementsByClassName('body')[0]
// Генерація нового коду CAPTCHA
function getCode() {
    return (uuid.v4()).slice(0, 8); // Генеруємо код CAPTCHA
}

// Оновлюємо CAPTCHA при натисканні на кнопку
refreshInput.addEventListener('click', function () {
    inputCaptcha.value = getCode(); // Встановлюємо новий код CAPTCHA
});
inputCaptcha.addEventListener('mousedown', function(event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку виділення тексту
})
closeMessage.addEventListener('click',function(){
    closMesBox.style.display='none'
  
        window.location.href = 'http://localhost:3000/';
   
   
})
function hideMessage(element) {
    element.classList.remove('show-message');
    element.classList.add('hide-message');

    // Приховуємо блок після завершення анімації
    setTimeout(() => {
        element.style.display = 'none';
    }, 300); // 300ms - тривалість анімації
}

// Додаємо обробник подій для кнопки закриття
closeEr.addEventListener('click', function () {
    hideMessage(closMesEror);
});
// Додаємо обробник для кнопки "Перевірити"

function showMessage(isSuccess) {
    // Ховаємо повідомлення про успіх та помилку перед показом нового
    closMesBox.style.display = 'none';
    closMesEror.style.display = 'none';
    
    if (isSuccess) {
        // Показуємо блок з успішним повідомленням
        closMesBox.classList.remove('hide-message'); // Видаляємо клас приховування
        closMesBox.classList.add('show-message');   // Додаємо клас показу
        closMesBox.style.display = 'block';         // Робимо його видимим
    } else {
        // Показуємо блок з помилкою
        closMesEror.classList.remove('hide-message');
        closMesEror.classList.add('show-message');
        closMesEror.style.display = 'block';        // Робимо його видимим

        // Через 2 секунди приховуємо повідомлення
        setTimeout(() => {
            hideMessage(closMesEror);
        }, 2000);
    }
}

butCheck.addEventListener('click', function () {
    let generatedCaptcha = inputCaptcha.value; // Отримуємо значення CAPTCHA
    let userInput = document.getElementById('captureValueType').value; // Введене значення користувача

    // Перевіряємо, чи введене значення користувача співпадає з згенерованим кодом
    if (userInput === generatedCaptcha) {
        // Якщо CAPTCHA правильна, надсилаємо запит на сервер
        fetch('/check-captcha', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ captcha: userInput }) // Відправляємо введене значення CAPTCHA
        })
        .then(response => response.json()) // Отримуємо JSON-відповідь
        .then(data => {
            if (data.success) {
                // alert('CAPTCHA перевірена успішно!'); // Повідомлення про успіх
                showMessage(true)
                setTimeout(()=>{
                    window.location.href = 'http://localhost:3000/';
                },2000)
                
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Сталася помилка при перевірці CAPTCHA. Спробуйте ще раз.');
        });
    } else {
        showMessage(false); // Повідомлення про невірну CAPTCHA
        inputCaptcha.value = getCode(); // Генеруємо новий код CAPTCHA
        document.getElementById('captureValueType').value = ""; // Очищуємо поле вводу
    }
});

// Додаємо обробник для кнопки "Перевірити"
if (butVerify) {
    butVerify.addEventListener('click', function () {
        contInf.style.display = "none";
        showBlock.style.display = 'grid';
        inputCaptcha.value = getCode(); // Генеруємо новий код CAPTCHA при відкритті
    });
} else {
    console.log('Елемент з id "verify" не знайдено');
}


toggleSwitch.addEventListener('click', function () {
    if (toggleSwitch.checked) {
        bodyTag.style.backgroundImage = 'none';
        bodyTag.style.backgroundColor = 'blue';
    } else {
        bodyTag.style.backgroundImage = "url('https://i.pinimg.com/originals/4c/1e/b0/4c1eb0b6858419e117a42ab018094f1e.gif')";
        bodyTag.style.backgroundColor = 'transparent'; // Reset background color
    }
});
