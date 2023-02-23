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