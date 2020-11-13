
let clothChoices = ["https://img.icons8.com/emoji/300/000000/womans-clothes.png",
                    "https://img.icons8.com/plasticine/300/000000/sweater.png",
                    "https://img.icons8.com/plasticine/300/000000/clothes.png",
                   "https://img.icons8.com/color/300/000000/worn-out-clothes.png"]
let clothChoicesPointer = 0
let cloth = document.getElementById("clothImg")

let pantChoices = ["https://img.icons8.com/office/300/000000/jeans.png",
                  "https://img.icons8.com/officel/300/000000/jeans.png",
                   "https://img.icons8.com/color/300/000000/womens-pants--v2.png"]
let pantChoicesPointer = 0
let pant = document.getElementById("pantImg")

let eyeChoices = ["https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Feye1.png?v=1605294886281",
                  "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Feye3.png?v=1605294888696",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Feye7.png?v=1605294889324",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Feye2.png?v=1605294889485"]
let eyeChoicesPointer = 0
let eye = document.getElementById("eye")


let noseChoices = ["https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fnose2.png?v=1605294888848",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fnose1.png?v=1605294888627",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fnose3.png?v=1605294889417"]
let noseChoicesPointer = 0
let nose = document.getElementById("nose")


let lipChoices = ["https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Flip2.png?v=1605294888502",
                  "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Flip.png?v=1605294888448"]
let lipChoicesPointer = 0
let lip = document.getElementById("lip")

      
      
function clothLeft(){
  console.log(cloth)
  clothChoicesPointer = clothChoicesPointer-1 < 0? clothChoices.length - 1:clothChoicesPointer - 1
  cloth.src = clothChoices[clothChoicesPointer]
  
}

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

function pantRight(){
  console.log(pant)
  pantChoicesPointer = pantChoicesPointer+1 > pantChoices.length - 1? 0 :pantChoicesPointer + 1
  pant.src = pantChoices[pantChoicesPointer]
  
}

function changeEye(){
   console.log("changeeye")
  eyeChoicesPointer = eyeChoicesPointer+1 > eyeChoices.length - 1? 0 :eyeChoicesPointer + 1
  eye.src = eyeChoices[eyeChoicesPointer]
}
function changeNose(){
   console.log("nose")
  noseChoicesPointer = noseChoicesPointer+1 > noseChoices.length - 1? 0 :noseChoicesPointer + 1
  nose.src = noseChoices[noseChoicesPointer]
}
function changeLip(){
   console.log("lip")
  lipChoicesPointer = lipChoicesPointer+1 > lipChoices.length - 1? 0 :lipChoicesPointer + 1
  lip.src = lipChoices[lipChoicesPointer]
}