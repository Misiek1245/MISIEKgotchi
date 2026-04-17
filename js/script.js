"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const items = [];
    const blank = document.querySelector('#alert');
    const food = document.querySelector('#food');
    const play = document.querySelector('#play');
    const heal = document.querySelector('#heal');
    const wash = document.querySelector('#wash');
    const stats = document.querySelector('#stats');
    const discipline = document.querySelector('#discipline');
    const lswitch = document.querySelector('#lswitch');
    items.push(food, lswitch, play, heal, wash, stats, discipline, blank);
    let itemn = items.length;
    function cancelA() {
    }
    function startA(x) {
    }
    function hideItems() {
        for (let i = 0; i < items.length; i++) {
            items[i].style.zIndex = "-1";
        }
    }
    function changeItem() {
        hideItems();
        if (itemn == items.length)
            itemn = 0;
        items[itemn].style.zIndex = "1";
        console.log(items[itemn]);
        itemn++;
    }
    //mouvment
    window.addEventListener('keydown', (event) => {
        console.log(`Key pressed: ${event.key}`);
        if (event.key == 'z' || event.key == 'a') {
            changeItem();
        }
        if (event.key == 'x' || event.key == 'b') {
            startA(itemn);
        }
        if (event.key == 'c') {
            cancelA();
        }
    });
    //mobile
    const buta = document.querySelector("#buta");
    const butb = document.querySelector("#butb");
    const butc = document.querySelector("#butc");
    console.log(items);
    buta.addEventListener("click", () => {
        console.log("clicked button a");
        changeItem();
    });
    butb.addEventListener("click", () => {
        console.log("clicked button b");
        startA(itemn);
    });
    butc.addEventListener("click", () => {
        console.log("clicked button c");
        cancelA();
    });
});
