
const memoryOne = document.getElementById('memory1');
const memoryTwo = document.getElementById('memory2');
const memory = document.getElementById('memory');
const storageOne = document.getElementById('storage1');
const storageTwo = document.getElementById('storage2');
const storageThree = document.getElementById('storage3');
const storage = document.getElementById('storage');
const free = document.getElementById('free');
const express = document.getElementById('express');
const delivary = document.getElementById('delivary');
const grandTotal = document.getElementById('grand-total');


const bestPrice = document.getElementById('price')
const total = document.getElementById('total')
// for memory
memoryOne.addEventListener("click", function(){
    memory.innerText = "0";
    updateTotal();    
});
memoryTwo.addEventListener("click", function(){
    memory.innerText = "180";
    updateTotal();
});

//  for storage 
storageOne.addEventListener("click", function(){
    storage.innerText = "0";
    updateTotal();    
});
storageTwo.addEventListener("click", function(){
    storage.innerText = "100";
    updateTotal();
});
storageThree.addEventListener("click", function(){
    storage.innerText = "180";
    updateTotal();
});

//  for delivary 
free.addEventListener("click", function(){
    delivary.innerText = "0";
    updateTotal();    
});
express.addEventListener("click", function(){
    delivary.innerText = "20";
    updateTotal();
});

// total prize 

bestPrice.innerText ="1299";

function updateTotal(){
    const productPrice = Number(bestPrice.innerText);
    const memoryPrice = Number(memory.innerText);
    const storagePrice = Number(storage.innerText);
    const delivaryPrice = Number(delivary.innerText);
    const totalPrice = productPrice + memoryPrice + storagePrice + delivaryPrice;
    total.innerText = totalPrice;
    promoHandler();

}
// promo 
const promo = document.getElementById('fild');
const apply = document.getElementById('apply');


function promoHandler(){
    if(promo.value.toLowerCase() == 'stevekaku'){
        grandTotal.innerText = parseFloat(total.innerText) - (parseFloat(total.innerText) * 20) / 100;
    } else {
        grandTotal.innerText = total.innerText; 
    }
}

apply.addEventListener('click', () =>{
    promoHandler();
})