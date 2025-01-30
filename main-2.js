
// const BODY = document.querySelector('body')
// const colorArr=['red', 'green', 'yellow']
// let counter=0
// // BODY.style.backgroundColor = colorArr[1]
// const COLOR_SHOW_BTN = document.querySelector('#buttonColor')

// // обработчик события
// COLOR_SHOW_BTN.addEventListener('click', ()=>{
//     console.log(`Мы кликнули по кнопке ${++counter}`)
//     // counter++
// })

console.log(document)
const BODY = document.querySelector("body")
console.log(BODY)
const colorArr = ["red","green", "yellow"]
let counter = 0
// BODY.style.backgroundColor = colorArr[2]
const COLOR_SHOW_BUTTON = document.querySelector("#buttonColor")
const LOGIN_BTN = document.querySelector("#login")

const LOGIN_FIELD = document.querySelector("#userlogin")
console.log(LOGIN_BTN)
console.log(LOGIN_FIELD)

 // console.log(COLOR_SHOW_BUTTON)
 COLOR_SHOW_BUTTON.addEventListener("click", ()=>{
  console.log(`Мы кликнули по кнопке ${++counter} раз`)
  colorArr.forEach((item, index)=>{
    setTimeout(() => {(
      // console.log("прошла 1 секунда")}, index*1000); 
    BODY.style.backgroundColor = item)}, index*1000)
  })
   })
   LOGIN_BTN.addEventListener('click',()=>{
    if (LOGIN_BTN.textContent === 'login'){
    LOGIN_BTN.textContent = 'LOGOUT'
    LOGIN_FIELD.style.display = 'block'}
    else{
      LOGIN_BTN.textContent = 'login'
      LOGIN_FIELD.style.display = 'none'

    }
   } )

   const NEWS = document.querySelector('.news')
   console.log(NEWS)

const newsArr = [
  {
    title: 'Путешествия в малопопулярные места',
    newsText: `
Сталкинг
Сталкинг — вид туризма, в котором туристическими объектами являются объекты и явления, 
по каким‑либо причинам игнорируемые или недостаточно изученные. как направление туризма существовал и раньше,
 но именно в 2025 году ожидается всплеск интереса путешественников к непопулярным странам и отдельным местам.

Этот тренд прослеживается по спросу на неклассические маршруты в Гренландию, Австралию, Бразилию, Африку.
 Искатели приключений наблюдают за звездами в Ирландии, выбирают Ботсвану ради одиночества в пустыне.

`,
    newsImg: './images_trip/396121-blackangel.jpg'


  },
  {
    title: 'Спортивный и музыкальный туризм',
    newsText: `
Совсем не новый и уж тем более не оригинальный, но набирающий популярность тренд.
 Крупное спортивное или музыкальное событие становится главным чекпоинтом путешествия. 
 В последнее время у туристов в почете футбольные и теннисные матчи, юбилейные концерты мировых исполнителей. 
 Туры формируются так, чтобы и достопримечательности посмотреть, и с местной кухней познакомиться. 

Массовые зрелища рождают живые эмоции и впечатываются в память посильнее автобусных экскурсий. 
Этот тренд усиливается в молодежной среде и способствует глобальному культурному обмену.`,
    newsImg: './images_trip/396121-blackangel.jpg'


  },
  {
    title: 'Сет-джеттинг — по следам киносъемок',
    newsText: `
Тенденция родилась в 2008 году с подачи журналиста The New York Post и с тех пор набирает популярность, как и количество запросов в Google на места съемок культовых киношедевров. В 2024 году фанаты Джеймса Бонда бывали в баре Ice Q в Исландии, а поклонники «Звездных войн» — на итальянском озере Комо. Психологи объясняют феномен сет‑джеттинга выбросом дофамина при посещении локации, когда картинка из любимого фильма оживает.

`,
    newsImg: './images_trip/396121-blackangel.jpg'


  },
  {
    title: 'Свежие новости о котятах',
    newsText: `Вчера котята поели, попили и легли спать Lorem ipsum dolor sit, 
     amet ,consectetur adipisicing elit. Officia, 
     facere iusto modi optio obcaecati perferendis nulla voluptatibus, 
     harum esse perspiciatis eius praesentium at assumenda doloribus hic voluptatum, 
     impedit reiciendis. Laboriosam!`,
    newsImg: './images_trip/396121-blackangel.jpg'


  },
]


console.log(newsArr)
newsArr.forEach((element)=>{
  NEWS.innerHTML += `
  <h2 class="cats">${element.title}</h2>
<div class = "wrapper-cats">
<p>${element.newsText}</p>
<img src="${element.newsImg}" alt="" class = "image-cats">


</div>
`
})

