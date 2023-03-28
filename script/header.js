//*Color NavBar
const header = document.querySelector("header");
const sectionOne = document.querySelector(".inicio");

const sectionInicio = {
    rooMargin: "-200px 0px 0px"
};

const observerInicio = new IntersectionObserver(function(entries, observerInicio) {
entries.forEach(entry =>{
    if(!entry.isIntersecting){
        header.classList.add("nav_scrolled");
    }else{
        header.classList.remove("nav_scrolled");
    }
})
},sectionInicio);

observerInicio.observe(sectionOne)

//*Menu Hamburguesa
const hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', () => {
    const isOpened = hamburguer.getAttribute('aria-expanded');

    if(isOpened === 'false'){
        hamburguer.setAttribute('aria-expanded', 'true');
    }else{
        hamburguer.setAttribute('aria-expanded', 'false');
    }
})




const toggleBtn = document.querySelector('.hamburguer');
const toggleBtnIcon = document.querySelector('.hamburguer p');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open');
    
}

