const black = document.querySelector(".black")
const orange = document.querySelector(".orange")
const blue = document.querySelector(".blue")
const pink = document.querySelector(".pink")
const purple = document.querySelector(".purple")
const watchImg = document.querySelector(".watch img")
const time = document.querySelector('.watch-cont p')
const timeBtn = document.querySelector('.timebtn')
const heart = document.querySelector('.heart')
const heartBtn = document.querySelector('.heartbtn')

//////////////COLOR////////////////////////
black.addEventListener('click', function(e){
    e.preventDefault()
    watchImg.src = "https://i.imgur.com/iOeUBV7.png"
})
orange.addEventListener('click', function(e){
    e.preventDefault()
    watchImg.src = "https://i.imgur.com/PTgQlim.png"
})
blue.addEventListener('click', function(e){
    e.preventDefault()
    watchImg.src = "https://i.imgur.com/Mplj1YR.png"
})
pink.addEventListener('click', function(e){
    e.preventDefault()
    watchImg.src = "https://i.imgur.com/Zygu7I3.png"
})
purple.addEventListener('click', function(e){
    e.preventDefault()
    watchImg.src = "https://i.imgur.com/xSIK4M8.png"
})


////Time
setInterval (function(){
    function getZeros(num){
        return num < 10 ? `0${num}` : num
    }
    const getTime = new Date()
    let hour = getZeros(getTime.getHours())
    let minute = getZeros(getTime.getMinutes())
    let seconds = getZeros(getTime.getSeconds())
    const timeFormat = `${hour}:${minute}:${seconds}`
    time.innerText = timeFormat
}, 1000)

timeBtn.addEventListener('click', function(){
    time.style.display = "flex"
    heart.style.display = "none"
})
heartBtn.addEventListener('click', function(){
    time.style.display = "none"
    heart.style.display = "flex"
})
