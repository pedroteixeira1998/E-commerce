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

const addToCartButton = document.querySelector('.button-cart');
addToCartButton.addEventListener('click', () => {

const productName = document.querySelector('#productName').textContent;
const productPrice = document.querySelector('#productPrice').textContent;
const productQuantity = document.querySelector('.input-quantity').value;

const cartItem = document.createElement('div');
cartItem.classList.add('box');
cartItem.innerHTML = `
    <div class="box-image">
      <img src="imagens/image-product-1.jpg" alt="">
    </div>
    <div class="box1">
      <div class="text">
        <p>${productName}</p>
      </div>
      <div class="box-price"> 
        <p class="box-price1">${productPrice} x </p>
        <p class="box-price2">${productQuantity}</p>
        <p class="box-price3">R$${productPrice * productQuantity},00</p>
        <span class="material-symbols-outlined" id="lixeira">delete</span>
      </div>
    </div>
  `;

  const cartContainer = document.querySelector('.box');
  const checkoutButton = document.querySelector('#botão');
  cartContainer.insertBefore(cartItem, checkoutButton);
});
