/* global Product, Cart */
'use strict';
// Set up an empty cart for use on this page.
const cart = new Cart([]);
const selectElement = document.getElementById('items');
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  //const selectElement = document.getElementById('items');
  // let items = document.createElement('items');
  let option;
  for (let i in Product.allProducts) {
    option = document.createElement('option');
    // option.setAttribute('value',)
    selectElement.appendChild(option);
    // console.log(Product.allProducts[i].name);
    option.textContent=`${Product.allProducts[i].name}`;
  }
}
// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
 event.preventDefault();
  // TODO: Prevent the page from reloading
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart 
  let index= document.getElementById("items").selectedIndex;
  let item = Product.allProducts[index].name;
  console.log(item);
  let quantity= event.target.quantity.value;
 console.log(event.target.quantity.value);
 let c= new CartItem(item, quantity);
 console.log (new CartItem(item, quantity));
 let newCart = new Cart(c);
}
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let itemCount=document.getElementById('itemCount');
  let count = cartNewItem.length-1;
  itemCount.textContent=count;
  console.log(count);
}
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
   // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
let index= document.getElementById("items").selectedIndex;
  let preview=document.getElementById('cartContents');
  let ulEl= document.createElement('ul');
  preview.appendChild(ulEl);
  let liEl=document.createElement('li');
 ulEl.appendChild(liEl);
  liEl.textContent=`  ${event.target.quantity.value} :  ${Product.allProducts[index].name} `;
}
// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);
// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();