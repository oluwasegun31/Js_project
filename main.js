let black = document.querySelector(".black")
let orange = document.querySelector(".orange")
let blue = document.querySelector(".blue")
let purple = document.querySelector(".purple")
let pink = document.querySelector(".pink")
let picture = document.querySelector(".img-fluid")
let time = document.querySelector(".time")
let heart = document.querySelector(".heart")
let btnTime = document.querySelector(".but")
let btnHeart = document.querySelector(".but2")

// color changing
black.addEventListener('click', function (){
    picture.src = "https://i.imgur.com/iOeUBV7.png"
})
orange.addEventListener('click', function(){
    picture.src = "https://i.imgur.com/PTgQlim.png"
})
blue.addEventListener('click', function(){
    picture.src = "https://i.imgur.com/Mplj1YR.png"
})
pink.addEventListener('click', function(){
    picture.src = "https://i.imgur.com/Zygu7I3.png"
})
purple.addEventListener('click', function(){
    picture.src = "https://i.imgur.com/xSIK4M8.png"
})

//time

setInterval( function(){
    var today = new Date();
    let addZeros = function (num) {
        return num < 10 ? `0${num}` : num;
    }
    time.innerHTML = `${addZeros(today.getHours())}:${addZeros(today.getMinutes())}:${addZeros(today.getSeconds())}`
}, 1000)
btnTime.addEventListener('click', function(){
    time.style.display = "block"
    heart.style.display = "none"
})
btnHeart.addEventListener('click', function(){
    time.style.display = "none"
    heart.style.display = "block"
})



