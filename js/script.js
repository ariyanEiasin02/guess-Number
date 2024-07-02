let wrapper__heading =document.querySelector(".wrapper__heading")
let wrapper__firstInput =document.querySelector(".wrapper__firstInput")
let wrapper__firstBtn =document.querySelector(".wrapper__firstBtn")
let wrapper__firstParaghrap =document.querySelector(".wrapper__firstParaghrap")
let wrapper__secondBtn = document.querySelector(".wrapper__secondBtn")
let wrapper__threeBtn = document.querySelector(".wrapper__threeBtn")
let wrapper__secondInput = document.querySelector(".wrapper__secondInput")
let wrapper__threeInput = document.querySelector(".wrapper__threeInput")
let wrapper__samll = document.querySelector(".wrapper__samll")
let wrapper__samll__one = document.querySelector(".wrapper__samll__one")
let counter = 5;
let wrapper__box1 = document.querySelector(".wrapper__box1")
let wrapper__box2 = document.querySelector(".wrapper__box2")
let wrapper__box3 = document.querySelector(".wrapper__box3")
let wrapper__won__one = document.querySelector(".wrapper__won__one")
let wrapper__won__Two = document.querySelector(".wrapper__won__Two")
let wrapper__one = document.querySelector(".wrapper__one")



wrapper__firstBtn.addEventListener("click",function (){
    if(wrapper__firstInput.value == ""){
        wrapper__firstParaghrap.innerHTML = "Enter Your Name"
        wrapper__firstParaghrap.style.display ="block"
    }else{
        wrapper__heading.innerHTML = "Player One"
        wrapper__firstParaghrap.style.display ="none"
        wrapper__box2.style.display ="block"
        wrapper__box1.style.display ="none"
    }
})

wrapper__secondBtn.addEventListener("click",function(){
    if(wrapper__secondInput.value == 0 || wrapper__secondInput.value > 10){
        wrapper__firstParaghrap.innerHTML = "Please Number 1-10"
        wrapper__firstParaghrap.style.display = "block"
    }else{
        if(wrapper__secondInput.value - 15){
            wrapper__heading.innerHTML = "Player Two"
            wrapper__box2.style.display ="none"
            wrapper__box3.style.display ="block"
            wrapper__samll__one.style.display = "block";
        }else{
            wrapper__firstParaghrap.innerHTML = "This is a String"
            wrapper__firstParaghrap.style.display = "block"
        }
    }
})

wrapper__threeBtn.addEventListener("click",function(){
    if(wrapper__secondInput.value === wrapper__threeInput.value){
        wrapper__won__Two.style.display="block"
        wrapper__one.style.display="none"
    }else{
        
       if(counter == 0){
        wrapper__won__one.style.display="block"
        wrapper__firstParaghrap.style.display = "block"
        wrapper__one.style.display="none"
       }else{
        wrapper__samll.innerHTML =counter --
       }
    }
})