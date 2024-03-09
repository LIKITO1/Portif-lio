window.addEventListener("scroll",()=>{
    var scroll=document.querySelector(".scrollTop");
    scroll.classList.toggle('active',window.scrollY >300);
})
function back(){
    window.scrollTo({
        top:0,
    })
}