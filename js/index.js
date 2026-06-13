let footer = document.createElement("footer");

document.body.appendChild(footer);

footer.id = "footer"; 

let today = new Date();

let thisYear = today.getFullYear();

let copyright = document.createElement("p");

copyright.innerHTML = "&copy;Jessica Sosa " + thisYear;

footer.appendChild(copyright);

let skills = ["JavaScript", "HTML", "CSS", "GitHub"];

let skillsSection = document.querySelector("#skills");

let skillsList = skillsSection.querySelector("ul");


for (let i = 0; i < skills.length; i++) {

    let skill = document.createElement("li");

    skill.innerText = skills[i];

    skillsList.appendChild(skill);

}

let messageForm = document.querySelector("form[name='leave_message']");


messageForm.addEventListener("submit", function (event) {
    event.preventDefault();
  let usersName = event.target.usersName.value;
  let usersEmail = event.target.usersEmail.value;
  let usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  let messageSection = document.querySelector("#messages");
  let messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
  

    newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
 `;

    let removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";


    removeButton.addEventListener("click", function (event) {
    let entry = event.target.parentNode;
    entry.remove();
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);



    messageForm.reset();

}); 


    fetch("https://api.github.com/users/jessicasosa444-art/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function(repositories) { console.log(repositories);
    let projectSection = document.querySelector("#Projects");
  
    let projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {
      let project = document.createElement("li");

      project.innerText = repositories[i].name;

      projectList.appendChild(project);

  }
    })
    .catch(function (error) {
    console.error("An error occurred:", error);
  });



