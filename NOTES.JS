const notesContainer = document.querySelector(".notes_container");
const createBtn=document.querySelector(".btn");
let notes=document.querySelectorAll(".input-box");


createBtn.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    let img=document.createElement("img"); 
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="Images/delete2.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})










