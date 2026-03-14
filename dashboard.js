function loadDashboard(){

let email = localStorage.getItem("email")

document.getElementById("userEmail").innerText =
"Logged in as: " + email

let data = JSON.parse(localStorage.getItem("user"))

let roles = {

frontend:["html","css","javascript","react"],

backend:["java","sql","spring"],

fullstack:["html","css","javascript","react","java","sql","spring"]

}

let userSkills = data.skills

let bestRole = ""
let bestScore = 0

for(let role in roles){

let required = roles[role]

let matchCount = 0

required.forEach(skill => {

if(userSkills.includes(skill)){
matchCount++
}

})

let score = matchCount / required.length

if(score > bestScore){
bestScore = score
bestRole = role
}

}

let requiredSkills = roles[bestRole]

let matched = []
let missing = []

requiredSkills.forEach(skill => {

if(userSkills.includes(skill)){
matched.push(skill)
}
else{
missing.push(skill)
}

})

let scorePercent =
Math.round((matched.length / requiredSkills.length) * 100)

document.getElementById("scoreText").innerText =
"Skill Match Score: " + scorePercent + "%"

document.getElementById("progressBar").style.width =
scorePercent + "%"

let gap = 100 - scorePercent

let level="Beginner"

if(scorePercent>=70) level="Advanced"
else if(scorePercent>=40) level="Intermediate"

document.getElementById("skillLevel").innerText = level

document.getElementById("careerFit").innerText =
bestRole.toUpperCase() + " Developer"

let m = document.getElementById("matched")
m.innerHTML=""

matched.forEach(skill => {

let span=document.createElement("span")
span.className="tag match"
span.innerText=skill
m.appendChild(span)

})

let ms=document.getElementById("missing")
ms.innerHTML=""

missing.forEach(skill => {

let span=document.createElement("span")
span.className="tag miss"
span.innerText=skill
ms.appendChild(span)

})

let learn=document.getElementById("learning")
learn.innerHTML=""

let gapText=document.createElement("p")

gapText.innerText="Skill Gap: " + gap + "%"

learn.appendChild(gapText)

if(missing.length>0){

let priority=document.createElement("p")

priority.innerText="Priority Skills to Learn:"

learn.appendChild(priority)

missing.forEach(skill=>{

let div=document.createElement("div")

div.innerText=skill.toUpperCase()

learn.appendChild(div)

})

}

}

function logout(){

localStorage.clear()

window.location="index.html"

}