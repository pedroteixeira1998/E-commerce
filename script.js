function trocadefotos(e){
    document.querySelector('#photo').src = e;
}

function increment() {
    var input = document.getElementById('input-quantity');
    input.value = parseInt(input.value) + 1;
  }

function decrement(){
    var input = document.getElementById('input-quantity');
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
})