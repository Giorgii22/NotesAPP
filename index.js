// const Notesdiv = document.querySelector(".notesdiv");
// const createbtn = document.querySelector(".btn1")
// let notes = document.querySelectorAll(".input-box")

// function showNotes(){
//     Notesdiv.innerHTML = localStorage.getItem("notes")
// }
// showNotes();
// function updatesStorage(){
//     localStorage.setItem(notes, notesbtn.innerHTML);
// }

// createbtn.addEventListener("click", () =>{
//     let inputbox = document.createElement("p");
//     let img = document.createElement("img");
//     inputbox.classList = "input-box";
//     inputbox.setAttribute("contenteditable", "true");
//     img.src = "./bin.jpg";
//     Notesdiv.appendChild(input-box).appendChild(img);
// })

// Notesdiv.addEventListener("click", function(e){
//     if(e.target.tagName === "IMG"){
//         e.target.parentElement.remove();
//         updatesStorage()
//     }
//     else if(e.target.tagName === "P"){
//         notes = document.querySelectorAll("input-box");
//         notes.forEach(nt =>{
//             nt.onkeyup = function (){
//                 updatesStorage()
//             }
//         })
//     }
// })




const Notesdiv = document.querySelector(".notesdiv");
const createbtn = document.querySelector(".btn1");
let notes = document.querySelectorAll(".input-box");

function showNotes(){
    Notesdiv.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updatesStorage(){
    localStorage.setItem("notes", Notesdiv.innerHTML);
}

createbtn.addEventListener("click", () =>{
    let inputbox = document.createElement("p");
    let img = document.createElement("img");
    inputbox.classList = "input-box";
    inputbox.setAttribute("contenteditable", "true");
    img.src = "./bin.jpg";
    Notesdiv.appendChild(inputbox).appendChild(img);
});

Notesdiv.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatesStorage();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>{
            nt.onkeyup = function (){
                updatesStorage();
            };
        });
    }
});




