const gotopBtn = document.getElementById("toTop");

window.addEventListener("scroll", (event) => {
    let scrollPos = this.scrollY;
    if(scrollPos >=700){
      gotopBtn.classList.remove('hidden')  
    }
    else{
gotopBtn.classList.add('hidden')  
    }

});

gotopBtn.addEventListener('click',(event)=>{
    window.scrollTo({
    top: 0,
    behavior: "smooth"
});
})