/* global Cart */
'use strict';
let tableBody = document.getElementById('tbc');
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}
// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}
// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
//tableBody.removeChild(trEl);
}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
//let tabler;
function showCart() {
//   // TODO: Find the table body
//   // TODO: Iterate over the items in the cart
//   // TODO: Create a TR
//   // TODO: Create a TD for the delete link, quantity,  and the item
//   // TODO: Add the TR to the TBODY and each of the TD's to the TR
  // let trEl = document.createElement('tr');
  // table.appendChild(tableBody);
  // tableBody.appendChild(trEl);
  let tdEl;
 let tdEltwo;
  let tdElR;
  // tabler=[1 -1 ];
  // for (let i=1;i<cartNewItem.length ;i++){
  //   tabler=cartNewItem[i];
  //   console.log(tabler);
  //  tdElR=document.createElement('td');
  //   tdElR.textContent="  ";
  //    trEl.appendChild(tdElR);
  //   tdEl=document.createElement('td');
  //   tdEl.textContent=tabler.quantity
  //   trEl.appendChild(tdEl);
  //  tdEltwo=document.createElement('td');
  //   tdEltwo.textContent=tabler.product;
  //   trEl.appendChild(tdEltwo);
  // // console.log(CratItem);
  // }
  let trEl;
  for (let i=1; i< cart.items.length;i++) {
    trEl = document.createElement('tr');
    table.appendChild(tableBody);
    tableBody.appendChild(trEl);
    tdElR=document.createElement('td');
     trEl.appendChild(tdElR);
     tdElR.textContent="  ";
    tdEl=document.createElement('td');
     trEl.appendChild(tdEl);
     tdEl.textContent=`${cart.items[i].quantity}`
    tdEltwo=document.createElement('td');
    trEl.appendChild(tdEltwo);
    tdEltwo.textContent=`${cart.items[i].product}`
  }
 }
function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}
// This will initialize the page and draw the cart on screen
renderCart();