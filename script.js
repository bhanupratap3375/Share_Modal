const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const card=document.querySelector(".card-wrapper");

//modal open 
const openModal =() =>{
    console.log("it is opened");
    modal.classList.add("active")
    overlay.classList.add("overlayactive");
    card.classList.add("passive");

};

const closeModal =() =>{
    console.log("it is closed");
    modal.classList.remove("active")
    overlay.classList.remove("overlayactive");
    card.classList.remove("passive");
};
