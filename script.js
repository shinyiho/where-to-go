
let clothChoices = ["https://img.icons8.com/emoji/48/000000/womans-clothes.png","https://img.icons8.com/plasticine/100/000000/sweater.png"]
let clothChoicesPointer = 0
let cloth = document.getelementbyID("clothImg")


      
      
let clothLeft = () =>{
  clothChoicesPointer = clothChoicesPointer-1 < 0? clothChoices.length - 1:clothChoicesPointer - 1
  image.src = clothChoices[clothChoicesPointer]
  
}
let clothRight = () =>{
  clothChoicesPointer = clothChoicesPointer+1 > clothChoices.length - 1? 0 :clothChoicesPointer + 1
  image.src = clothChoices[clothChoicesPointer]
  
}