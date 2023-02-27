let mainColors = localStorage.getItem("color_option");
if (mainColors !==null) {
    document.documentElement.style.setProperty('--main-color',localStorage.getItem("color_option"));
    document.querySelectorAll('.colors-list li').forEach(li =>{
        li.classList.remove("active");
        if(li.dataset.color === mainColors){
            li.classList.add("active");
        }
    });
}
// Setting Box 
document.querySelector(".settings-box i").onclick = function(){
    this.classList.toggle("fa-spin");
    document.querySelector(".settings-box").classList.toggle("open");
}
// Switch Color 
const colors = document.querySelectorAll(".colors-list li");
colors.forEach(li => {
    li.addEventListener("click",(e)=>{
        //  console.log(e.target.dataset.color);
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        localStorage.setItem("color_option",e.target.dataset.color);
        e.target.parentElement.querySelectorAll('.active').forEach(element =>{
            element.classList.remove("active");
        });
        e.target.classList.add("active")
    });
});

// Switch Background-Color 
const randomBackEl = document.querySelectorAll(".random-back span");
randomBackEl.forEach(span => {
    span.addEventListener("click",(e)=>{
        //  console.log(e.target.dataset.color);
        e.target.parentElement.querySelectorAll('.active').forEach(element =>{
            element.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});

let page = document.querySelector(".landing-page");
let imgArray = ["photo (1).jpg","photo (2).jpg","photo (3).jpg","photo (4).jpg","photo (5).jpg"];

setInterval ( ()=>{
    let number = Math.floor(Math.random()*imgArray.length);
    // console.log(number)
    page.style.backgroundImage = 'url("images/'+ imgArray[number]+'")';
},10000)

