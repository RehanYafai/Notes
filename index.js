console.log("project-1")
shownotes();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener('click', function (e) {
    // console.log("you have click")
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes)
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    console.log(notesobj);
    shownotes();
});
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = '';
    notesobj.forEach(function (element, index) {
        html +=
            `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNotes(this.id)"  class="btn btn-primary ">Delete Note</button>
        </div>
        </div>
        `
    });
    let notesEle = document.getElementById("notes");
    if (notesobj == null) {
        console.log("no inner txt")
        notesEle.innerHTML = `nothing to show! use  'add notes' section to add notes`;
    }

    else {
        notesEle.innerHTML = html;
        console.log("html is change");
    }
}
function deleteNotes(index) {
    console.log("I am deleting", index);
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes)
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes()
}
let search = document.getElementById("searchtxt");
search.addEventListener('input', function () {
    let inputval = search.value.toLowerCase();
    console.log("input event is fired", inputval)
    let noteCard = document.getElementsByClassName("noteCard")
    Array.from(noteCard).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })


})














