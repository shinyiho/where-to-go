
let clothChoices = ["https://img.icons8.com/emoji/200/000000/womans-clothes.png",
                    "https://img.icons8.com/plasticine/200/000000/sweater.png",
                    "https://img.icons8.com/plasticine/200/000000/clothes.png",
                   "https://img.icons8.com/color/200/000000/worn-out-clothes.png",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2F%E5%84%B2%E5%AD%983.png?v=1605364493122",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fcloth.png?v=1605365166273",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2F%E5%86%B0.png?v=1605366089790",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2F%E5%88%80%E5%93%A5.png?v=1605366573381",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fron1.png?v=1605371163455",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fgrass.png?v=1605373256359",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fsnake.png?v=1605373256330",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fpurple.png?v=1605373256478",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fcloud.png?v=1605373256573"]
let clothChoicesPointer = 0
let cloth = document.getElementById("clothImg")

let pantChoices = ["https://img.icons8.com/office/200/000000/jeans.png",
                  "https://img.icons8.com/officel/200/000000/jeans.png",
                   "https://img.icons8.com/color/200/000000/womens-pants--v2.png",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2F%E8%97%8D%E8%A4%B2.png?v=1605367817924",
                  "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fcircle.png?v=1605371163455",
                  "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fron.png?v=1605371163455",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Ffish.png?v=1605371163522",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fpumkin.png?v=1605371163608"]
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

let faceChoices = ["https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fface.png?v=1605295108978",
                   "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fface3.png?v=1605302847791",
                  "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fface6.png?v=1605302847791",
                  "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fface2.png?v=1605302847791",
                  "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fface7.png?v=1605302847845",
                  "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fface8.png?v=1605302847861",
                  "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fface5.png?v=1605302847898",
                  "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fface4.png?v=1605302848002",
                  "https://cdn.glitch.com/1db309ec-6a57-4600-8474-072f16a1ba36%2Fface9.png?v=1605302848280"]
let faceChoicesPointer = 0
let face = document.getElementById("face")

      
      
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


function changeFace(){
   console.log("face")
  faceChoicesPointer = faceChoicesPointer+1 > faceChoices.length - 1? 0 :faceChoicesPointer + 1
  face.src = faceChoices[faceChoicesPointer]
}