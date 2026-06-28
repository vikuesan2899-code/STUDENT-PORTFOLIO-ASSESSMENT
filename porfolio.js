let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


if (addTaskBtn) {

    addTaskBtn.addEventListener("click", addTask);

    displayTasks();

}


function saveTasks(){

    localStorage.setItem("tasks", JSON.stringify(tasks));

}


function addTask(){

    const taskText = taskInput.value.trim();

    if(taskText === ""){

        alert("Please enter a task.");

        return;

    }

    tasks.push({

        text:taskText,

        completed:false

    });

    saveTasks();

    displayTasks();

    taskInput.value="";

}


function displayTasks(){

    taskList.innerHTML="";

    tasks.forEach(function(task,index){

        const li=document.createElement("li");

        li.className="task-item";

        const span=document.createElement("span");

        span.className="task-text";

        span.textContent=task.text;

        if(task.completed){

            span.classList.add("completed");

        }

        const buttonContainer=document.createElement("div");

        buttonContainer.className="task-buttons";

        const completeBtn=document.createElement("button");

        completeBtn.textContent=task.completed
        ? "Completed"
        : "Complete";

        completeBtn.className="complete-btn";

        completeBtn.disabled=task.completed;

        completeBtn.addEventListener("click",function(){

            completeTask(index);

        });

        const deleteBtn=document.createElement("button");

        deleteBtn.textContent="Delete";

        deleteBtn.className="delete-btn";

        deleteBtn.addEventListener("click",function(){

            deleteTask(index);

        });

        buttonContainer.appendChild(completeBtn);

        buttonContainer.appendChild(deleteBtn);

        li.appendChild(span);

        li.appendChild(buttonContainer);

        taskList.appendChild(li);

    });

}

function completeTask(index){

    tasks[index].completed=true;

    saveTasks();

    displayTasks();

}

function deleteTask(index){

    tasks.splice(index,1);

    saveTasks();

    displayTasks();

}



// contact page

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", validateForm);

}

function validateForm(event){

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phonePattern = /^[0-9]{11}$/;

    if(name === ""){

        formMessage.style.color = "red";

        formMessage.textContent = "Please enter your name.";

        return;

    }

    if(!emailPattern.test(email)){

        formMessage.style.color = "red";

        formMessage.textContent = "Please enter a valid email address.";

        return;

    }

    if(!phonePattern.test(phone)){

        formMessage.style.color = "red";

        formMessage.textContent = "Phone number must contain exactly 11 digits.";

        return;

    }

    if(message === ""){

        formMessage.style.color = "red";

        formMessage.textContent = "Please enter your message.";

        return;

    }

    formMessage.style.color = "green";

    formMessage.textContent = "Message sent successfully!";

    contactForm.reset();

}
