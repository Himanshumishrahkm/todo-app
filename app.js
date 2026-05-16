const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");


const tasks = document.querySelectorAll(".task");
let dragedElement = null;

tasks.forEach(task => {
    task.addEventListener("drag",(e)=>{
       e.preventDefault();
       dragedElement = task;
    })
});

function Adddragatcolumn(col){
    col.addEventListener("dragenter",(e)=>{
    e.preventDefault();
    col.classList.add("hover-over");
})

col.addEventListener("dragleave",(e)=>{
    e.preventDefault();
    col.classList.remove("hover-over");
})

col.addEventListener("dragover",(e)=>{
    e.preventDefault();
})

col.addEventListener("drop",e=>{
    e.preventDefault();

    col.appendChild(dragedElement);
    col.classList.remove("hover-over");

    [todo,progress,done].forEach(col=>{
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");
        count.innerHTML = tasks.length;
    })
})
}



Adddragatcolumn(todo);
Adddragatcolumn(progress);
Adddragatcolumn(done);

/* Modal related */
const toggleModalButton = document.querySelector("#toggle-modal");
const modal = document.querySelector(".modal");
const bg_blur = document.querySelector(".bg");
const addTaskButton = document.querySelector("#add-new-task");


toggleModalButton.addEventListener("click",(e)=>{
    modal.classList.toggle("active");
    
    bg_blur.addEventListener("click",(e)=>{
        modal.classList.remove("active");
    })

    addTaskButton.addEventListener("click",(e)=>{
        e.preventDefault();
        const inp = document.querySelector("#modal-title").value;
        const text = document.querySelector("#modal-textarea").value;

        const div = document.createElement("div");
        div.classList.add("task");
        div.setAttribute("draggable","true");

        div.innerHTML = `
                    <h2>${inp}</h2>
                    <p>${text}</p>
                    <button>Delete</button>
                        `

        todo.appendChild(div);
        [todo,progress,done].forEach(col=>{
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");
        count.innerHTML = tasks.length;
    })
        modal.classList.remove("active");

        div.addEventListener("drag",(e)=>{
            dragedElement = div;
        })

    })

    

    
})

/* Modal related */

