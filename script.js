
let clothChoices = ["https://img.icons8.com/emoji/300/000000/womans-clothes.png","https://img.icons8.com/plasticine/300/000000/sweater.png"]
let clothChoicesPointer = 0
let cloth = document.getElementById("clothImg")
let pantChoices = ["https://img.icons8.com/emoji/300/000000/womans-clothes.png","https://img.icons8.com/plasticine/300/000000/sweater.png"]
let pantChoicesPointer = 0
let pant = document.getElementById("pantImg")
      
      
function clothLeft(){
  console.log(cloth)
  clothChoicesPointer = clothChoicesPointer-1 < 0? clothChoices.length - 1:clothChoicesPointer - 1
  cloth.src = clothChoices[clothChoicesPointer]
  
}
// }

function clothRight(){
  console.log(cloth)
  clothChoicesPointer = clothChoicesPointer+1 > clothChoices.length - 1? 0 :clothChoicesPointer + 1
  cloth.src = clothChoices[clothChoicesPointer]
  
}

function pantLeft(){
  console.log(pant)
  pantChoicesPointer = pantChoicesPointer-1 < 0? pantChoices.length - 1:pantChoicesPointer - 1
  pant.src = pantChoices[pantChoicesPointer]
  
}
// }

function pantRight(){
  console.log(pant)
  pantChoicesPointer = pantChoicesPointer+1 > pantChoices.length - 1? 0 :pantChoicesPointer + 1
  pant.src = pantChoices[pantChoicesPointer]
  
}