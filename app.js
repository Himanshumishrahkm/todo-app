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
    console.log(e.target , dragedElement,col);

    // creating div 
const taskDiv = document.createElement('div');
taskDiv.setAttribute('draggable', 'true');
taskDiv.classList.add('task');

taskDiv.innerHTML = dragedElement.innerHTML;

e.target.appendChild(taskDiv);
 if (dragedElement && dragedElement.parentElement) {
        dragedElement.parentElement.removeChild(dragedElement);
    }
        
        dragedElement = null;
})
}



Adddragatcolumn(todo);
Adddragatcolumn(progress);
Adddragatcolumn(done);

