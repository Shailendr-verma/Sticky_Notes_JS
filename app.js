const notesContainer = document.querySelector(".notes-container");

const CreateBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    notesContainer.innerHTML =localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

CreateBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p")
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "delete_3405244.png";
    notesContainer.appendChild(inputBox).appendChild(img);

});

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "p") {
        notes = document.querySelectorAll(".input-box");

        notes.forEach(nt => {
            nt.onkeyup = function () {
                updateStorage();
            }
        })
    }


});
document.addEventListener("keydown",Event =>{
    if(Event.key === "Enter"){
        document.execCommand("insertLineBreak");
        Event.preventDefault();
    }
});