function trocadefotos(e){
    document.querySelector('#photo').src = e;
}

function trocadefoto(e){
    document.querySelector('#photo1').src = e;
}

function increment() {
    var input = document.getElementById('produto');
    input.value = parseInt(input.value) + 1;
  }

function decrement(){
    var input = document.getElementById('produto');
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
}
}

var container = document.getElementById("container");
var button = document.getElementById("action-btn");

button.addEventListener("click", function(){

    var container = document.getElementById("container");

    if(container.style.display === 'none'){
        container.style.display = "block";
    } else{
        container.style.display = "none";
    }
});

const openModalButton = document.querySelector(".open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () =>{
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade]. forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

