let container = document.querySelector("#container");
let userinput = document.querySelector("#userinput");
let todolist = document.querySelector("#todolist");
const addbtn = document.querySelector("#addbtn");

addbtn.onclick = () => {
    let todoDiv = document.createElement("div");
    todoDiv.id = "tododiv";

    let p = document.createElement("p");
    p.innerHTML = userinput.value;

    let delbtn = document.createElement("button");
    delbtn.id = "delbtn";
    delbtn.innerHTML = "Delete";
    delbtn.onclick = () => {
        todoDiv.remove();
        delbtn.remove();
    }
    //adding child to the todolist 
    todoDiv.appendChild(p)
    todoDiv.appendChild(delbtn);

    //appednig todolist to tododiv 
    todolist.appendChild(todoDiv);

}
