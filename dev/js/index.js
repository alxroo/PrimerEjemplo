const testimony = document.querySelectorAll(".testimonys__watch")
const arrowleft = document.querySelector(".testimonys__arrow--left")
const arrowright = document.querySelector(".testimonys__arrow--right")

let indice = 0;

arrowleft.addEventListener("click",()=>{
    
    if(indice>0){
        indice--;
   
        testimony.forEach((box,index) => {
            box.classList.remove('active')       
        })
        testimony[indice].classList.add("active")
    }
})

arrowright.addEventListener("click",()=>{
    
    if(indice<3){
        indice++;
    
        testimony.forEach((box,index) => {
            box.classList.remove('active')       
        })
        testimony[indice].classList.add("active")
    } 
})

//------------------------------------------------------
const btnArrowQues = document.querySelectorAll(".answer__arrow")


btnArrowQues.forEach((btn,index)=>{
    console.log(btn)
    console.log(index)
})
