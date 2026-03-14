const roleSkills = {

frontend:["html","css","javascript","react"],

backend:["java","sql","spring"],

fullstack:["html","css","javascript","react","java","sql","spring"]

}

function showSkills(){

let role=document.getElementById("role").value

let container=document.getElementById("skillContainer")

container.innerHTML=""

if(!role) return

roleSkills[role].forEach(skill=>{

let label=document.createElement("label")

label.innerHTML=`<input type="checkbox" value="${skill}"> ${skill.toUpperCase()}`

container.appendChild(label)

})

}

function saveSkills(){

let role=document.getElementById("role").value

let checked=document.querySelectorAll("input[type=checkbox]:checked")

let skills=[]

checked.forEach(c=>skills.push(c.value))

localStorage.setItem("user",JSON.stringify({

role:role,
skills:skills

}))

window.location="dashboard.html"

}