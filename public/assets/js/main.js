const bdark = document.querySelector('#bdark')
const body = document.querySelector('body');

load();

bdark.addEventListener('click', (e) => {
  body.classList.toggle('darkmode');
  store(body.classList.contains('darkmode'));
});

function load(){
    const  darkmode = localStorage.getItem('darkmode');
    if(!darkmode) {
        store('false');
    }else if(darkmode === 'true'){
        body.classList.toggle('darkmode');
    }
}
function store(value) {
    localStorage.setItem('darkmode', value);
}


const switchToggle = document.getElementById("switch"),
    switchToggleImage = document.getElementById("switchToggleImage"),
    container = document.getElementById("bdark");

let switchState = true;

switchToggle.addEventListener("click", (e) => {
    container.classList.toggle("dark");

    if (switchState) {
        switchToggleImage.src = "../images/moon.png";
        switchState = !switchState;
    } else {
        switchToggleImage.src = "../images/sun.png";
        switchState = !switchState;
    }
});
