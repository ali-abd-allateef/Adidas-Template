let up= document.querySelector(".up");

window.onscroll = function () {
    if (this.scrollY >= 500) {
        up.classList.add("show");
    }else{
        up.classList.remove("show");
    }
};

up.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
};

// Start Toggle Menu
let toggle= document.querySelector(".toggle-minu");
let tLinks =document.querySelector(".link");

toggle.onclick = function(){
   tLinks.classList.toggle("show");
}

// End Toggle Menu