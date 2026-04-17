document.addEventListener("DOMContentLoaded", () => {
const items:HTMLElement[] = []
const blank = document.querySelector('#alert') as HTMLElement | null
const food = document.querySelector('#food') as HTMLElement | null
const play = document.querySelector('#play') as HTMLElement | null
const heal = document.querySelector('#heal') as HTMLElement | null
const wash = document.querySelector('#wash') as HTMLElement | null
const stats = document.querySelector('#stats') as HTMLElement | null
const discipline = document.querySelector('#discipline') as HTMLElement | null
const lswitch = document.querySelector('#lswitch') as HTMLElement | null

items.push(food!, lswitch!, play!, heal!, wash!, stats!, discipline!, blank!)

let itemn :number = items.length;
function cancelA(){
    
}
function startA(x :number){
    
}
function hideItems() {
    for(let i=0; i< items.length; i++){
        items[i].style.zIndex ="-1"
    }
}
function changeItem() {
    hideItems()
    if (itemn == items.length)itemn = 0
    items[itemn].style.zIndex ="1"
    console.log(items[itemn])
    itemn++       
}

//mouvment
window.addEventListener('keydown', (event) => {
  console.log(`Key pressed: ${event.key}`);
 
    if(event.key == 'z' || event.key == 'a'){
        changeItem()
    }
    if(event.key == 'x' || event.key == 'b'){
        startA(itemn)
    }
    if(event.key == 'c'){
        cancelA() 
    }
});

//mobile
const buta = document.querySelector("#buta") as HTMLElement | null
const butb = document.querySelector("#butb") as HTMLElement | null
const butc = document.querySelector("#butc") as HTMLElement | null
console.log(items)

    buta!.addEventListener("click",()=>{
        console.log("clicked button a")
        changeItem()
    })
    butb!.addEventListener("click",()=>{
        console.log("clicked button b")
        startA(itemn)
    })
    butc!.addEventListener("click",()=>{
        console.log("clicked button c")
        cancelA() 
    })
})
