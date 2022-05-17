////RANDOM COLOR////


// let btn=document.querySelector(".my-btn")
// let div=document.querySelector(".mydiv")

// btn.addEventListener("click", function(){
//    let r = Math.floor(Math.random() * 256)
//    let g = Math.floor(Math.random() * 256)
//    let b = Math.floor(Math.random() * 256)

//    div.style.backgroundColor="rgb("+r+","+b+","+g+")";

// })

//------------------------------------------------------------------------

//////SeyInterval and setTimeout


let btn=document.querySelector(".my-btn")
let div=document.querySelector(".mydiv")
function randomColor() {
   let r = Math.floor(Math.random() * 256)
   let g = Math.floor(Math.random() * 256)
   let b = Math.floor(Math.random() * 256)
   div.style.backgroundColor="rgb("+r+","+b+","+g+")";
}
btn.addEventListener("click", function () {
    console.log("please wait");
    setInterval(randomColor,2000)
    
})

// setTimeout(() =>{
// alert("coooloors")
// },1000)



//------------------------------------------------------------------------
let addTaskBtn = document.querySelector(".add-task");
let taskInput = document.querySelector("input.task-title");
let taskWrapper = document.querySelector(".tasks .list-group");

addTaskBtn.onclick = () => {
    if (taskInput.value.trim() !== "") {
        let newTaskElem = "<li class='list-group-item'>" + taskInput.value + "</li>"
        taskWrapper.innerHTML = newTaskElem + taskWrapper.innerHTML ;
        taskInput.value = "";
    }
    else {
        alert("Can't add an empty task!");
    }
}
document.addEventListener("keyup", function(e) {
    if (e.keyCode==13 && taskInput.value.trim() !== "") {
        let newTaskElem = "<li class='list-group-item'>" + taskInput.value + "</li>"
        taskWrapper.innerHTML = newTaskElem + taskWrapper.innerHTML ;
        taskInput.value = "";
    }   
    }
)


function myFunction() {
    const list = document.getElementById("myList");
        while (list.hasChildNodes()) {
        if ( taskWrapper.hasChildNodes()) {
            taskWrapper.removeChild(list.firstChild);
        }
        
    }}
  