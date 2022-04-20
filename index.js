let ul = Array.from(document.querySelectorAll("ul li"));
let front = document.querySelector(".front");
let back = document.querySelector(".back");
let paragraph = document.getElementById("para")

// console.log(ul)
// console.log(li)

ul.forEach(function(li){
    li.addEventListener('click', function(e){
        deleted();
        let x = e.target.dataset.one;
        e.target.classList.add('active');
        paragraph.textContent = `You select ${x} out of ${ul.length}`
    })
});
function deleted(){
    ul.forEach(function(li){
        li.classList.remove('active')
    })
}
function myClick(){
    front.classList.toggle("hidden");
    back.classList.toggle("hidden");
}
