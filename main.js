
//single element 
// const form = document.getElementById("todo-from");
// const form = document.querySelector("#todo-form");
//multiple element
// console.log(document.querySelectorAll('.item'));
// const items = document.querySelectorAll(".item");
// items.forEach((a)=>{
// console.log(a);
// })
// console.log(document.getElementsByClassName("item"))
// console.log(document.getElementsByTagName("li"));


const todos = document.querySelector("#todo-list");
// todos.lastElementChild.remove();
// todos.firstElementChild.textContent="hello";
// todos.lastElementChild.innerHTML = "<h1>hello</h1>"

const button = document.querySelector(".submit");

// button.addEventListener("어떤이벤트", 어떤기능() )
// button.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log("click!!!!!!!!!!!!") //form을 submit하면서 새로고침 되어버림. 
//     e.target.style.color="red"   
// })

const todoInput = document.querySelector("#todo-input");
const msg = document.querySelector("#msg");
button.addEventListener("click", ouSubmit);


function ouSubmit(e){
    e.preventDefault();

    if(todoInput.value === ''){
        msg.style.display ="block";
        setTimeout(()=>msg.style.display="none",2000)
        return;
    }
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(todoInput.value));
    todos.appendChild(li)
    todoInput.value = "";
}