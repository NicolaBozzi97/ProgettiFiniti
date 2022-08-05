/*JS DI CAUSH PER MENU A TENDINA*/ 
/*get access to the hamburger class*/
const hamburger = document.querySelector(".hamburger");
/*get access to the nav-menu*/
const navMenu = document.querySelector(".nav-menu");

/* now we're going to add an event listener to the hambuger, of type click*/
hamburger.addEventListener("click", () => {
  /*quando cliccherai si attiveranno le seguenti classi*/
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

/*per fare in modo che quando clicchi un elemento del menu, e quindi vai nella sezione desiderata, la tendina del menu si chiuda e non ricompaia nella nuova pagina aperta si usa questo codice*/

/*seleziono nav-link class (la classe delle singole parole che compongono il menù)*/
const navlink = document.querySelectorAll(".nav-link")
navlink.forEach(n => {
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
})

/*per maggiori info https://www.youtube.com/watch?v=flItyHiDm7E&t=192s&ab_channel=TraversyMedia
min 9*/
