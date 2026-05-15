const todo = document.querySelector("#todo");
const progress = document.querySelector("#progress");
const done = document.querySelector("#done");


const tasks = document.querySelectorAll(".task");

tasks.forEach(task => {
    task.addEventListener("drag",(e)=>{
       
    })
});

function Adddragatcolumn(col){
    col.addEventListener("dragenter",()=>{
    col.classList.add("hover-over");
})

col.addEventListener("dragleave",()=>{
    col.classList.remove("hover-over");
})
}

Adddragatcolumn(todo);
Adddragatcolumn(progress);
Adddragatcolumn(done);

