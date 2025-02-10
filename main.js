const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');
const modal = document.getElementById('modal');
const loginForm = document.getElementById('loginForm');
const labelName = document.getElementById('labelName')

labelName.addEventListener('click',()=>{
    loginForm.elements.login.focus()
loginForm.elements.password.addEventListener('focus',()=>{console.log(
    'Мы сфокусировались на пароле')
}
)

});
const persons =
    [
        { name: 'Иван', password: 'ivan123' },
        { name: 'Ярослав', password: 'yar123' },
        { name: 'Виктор', password: 'vik123' },
    ]

    
openModalButton.addEventListener('click', function () {
    modal.style.display = 'block'
});

closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none'
});

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const login = this.querySelector('[name="login"]').value
    const password = this.querySelector('[name="password"]').value

    const user = persons.find(person => person.name === login);
    console.log(user)
    if (!user) {
        alert('Не удалось найти пользователя')
        this.reset();
    }
    else if (user.password === password) {
        alert(`Добро пожаловать, ${user.name}!`)
        modal.style.display = 'none'
        this.reset();

    }
    else {
        alert('Пароль неверный!')
        this.querySelector('[name="password"]').value = ''

    }

});
document.addEventListener('keydown', (event) => {
    if(event.key === 'Escape'){
        modal.style.display = 'none'
    }

    // const validation = /[!@^*&]/g //регулярка - проверка на нежелательные знаки
    // const isWrongValidation = event.key.match(validation)
    // // if (isWrongValidation){
    // //     loginForm.elements.password.value = 

    // // }

    // console.log(loginForm.elements.password.value = loginForm.elements.password.value.slice(0,-1))
});