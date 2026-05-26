let footer = document.createElement("footer");

document.body.appendChild(footer);

let today = new Date();

let thisYear = today.getFullYear();

let copyright = document.createElement("p");

copyright.innerHTML = "Jessica Sosa © " + thisYear;

footer.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "GitHub"];

let skillsSection = document.querySelector("#Skills");

let skillsList = skillsSection.querySelector("ul");


for (let i = 0; i < skills.length; i++) {

    let skill = document.createElement("li");

    skill.innerText = skills[i];

    skillsList.appendChild(skill);

}