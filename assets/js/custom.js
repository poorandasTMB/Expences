
"use strict"
let headerToggle  =document.querySelector(".header__toggle");
let MenuHeader  =document.querySelector(".aside__bar");
let Body  =document.querySelector("body");

headerToggle.addEventListener("click",()=>{
    MenuHeader.classList.toggle("active");
    Body.classList.toggle("active")
})

let TabsBtn =document.querySelectorAll(".tab__button");
let Tabs__content =document.querySelectorAll(".tabs__content");
``
TabsBtn.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        for(let i of TabsBtn){
            i.classList.remove("active")
        }
        for(let i of Tabs__content){
            i.classList.remove("active")
        }
        Tabs__content[index].classList.add("active")
        element.classList.add("active")
    })
})


let headerToggleSpan  =document.querySelector(".header__logo span");

// Header Dynmic Js Code
let HeaderExpanecs=document.querySelector(".header__logo span");
let getdate= new Date();
let time=getdate.getHours();

var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
    HeaderExpanecs.innerHTML="Morning"
} else if (curHr < 18) {
  HeaderExpanecs.innerHTML="afternoon"
}
else if (curHr < 20) {
    HeaderExpanecs.innerHTML="Evening"
  }
else {
    HeaderExpanecs.innerHTML="Night"
}