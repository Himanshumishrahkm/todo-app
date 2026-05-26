let taskData = {};

const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");

const tasks = document.querySelectorAll(".task");
let dragedElement = null;

/* Reload the previous data */
if(localStorage.getItem("task_data"))
{
    const data = JSON.parse(localStorage.getItem("task_data"));
    for (const col in data) {
       const column = document.querySelector(`#${col}`);

       data[col].forEach(c =>{
        create_div(c.title,c.desc,column);
       })
    }


     [todo,progress,done].forEach(col=>{
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");

        count.innerText = tasks.length;
    })

}


/* For deleting Tasks */
const delete_bnt = document.querySelectorAll("#bnt_delete");

delete_bnt.forEach(bnt => {
    bnt.addEventListener("click",e=>{
    let par_ele = bnt.parentElement;
    par_ele.remove();
    savedIn();
    

})
})


/* drag and drop functionality*/

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

    savedIn();
    
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
    })

    
    
    bg_blur.addEventListener("click",(e)=>{
        modal.classList.remove("active");
    })

    addTaskButton.addEventListener("click",(e)=>{
        e.preventDefault();
        const inp = document.querySelector("#modal-title").value;
        const text = document.querySelector("#modal-textarea").value;

        create_div(inp,text,todo);

        savedIn();
        document.querySelector("#modal-title").value = "";
    document.querySelector("#modal-textarea").value = "";
    
        modal.classList.remove("active");
    })
  

/* Modal related */




/* function for creating div element */

function create_div(inp,text,col){
     const div = document.createElement("div");
        div.classList.add("task");
        div.setAttribute("draggable","true");

        div.innerHTML = `
                    <h2>${inp}</h2>
                    <p>${text}</p>
                    <button id = "bnt_delete">Delete</button>
                        `;
        col.appendChild(div);


         div.addEventListener("drag",(e)=>{
            dragedElement = div;
            
        })

    div.childNodes[5].addEventListener("click",e=>{
        div.remove();
        savedIn();

    })
}

/* For saving the data in local storage */

function savedIn()
{
    [todo,progress,done].forEach(col=>{
        const tasks = col.querySelectorAll(".task");
        const count = col.querySelector(".right");
        count.innerHTML = tasks.length;
    taskData[col.id] = Array.from(tasks).map(t =>{
            return {
                title : t.querySelector("h2").innerText,
                desc : t.querySelector("p").innerText,
            }
        })
        
        
    })
   localStorage.setItem("task_data",JSON.stringify(taskData));
}




