//Header tobble

let MenuBtn = document.getElementById("MenuBtn")
MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark');

})

// typed effect


let typed = new Typed('.auto-input',{
    strings :['Front-End Developer','Back-End Developer','Web Developer','App Developer'],
     typeSpeed: 100,
    backSpeed: 100,
    backDela: 2000,
    loop:true,
})
