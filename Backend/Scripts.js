
// let playersList = {};


// // constructor function for creating players
// function Player(name,position,rating){
//     this.name = name;
//     this.position = position;
//     this.rating = rating;
//     this.paidStatus = "Not Paid"
// }

// playersList['Ben']=new Player('Ben','Midfielder',8);
// playersList['Shaun']=new Player('Shaun','Midfielder',9);

// console.log(playersList['Ben'].rating);

const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

// show sidebar
menuBtn.addEventListener('click', ()=> {
    sideMenu.style.display = 'block'
})

// close sidebar
closeBtn.addEventListener('click', ()=> {
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span').classList.toggle('active');
})

