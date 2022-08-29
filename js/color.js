// window.onload = function() {
//     let tmp = document.querySelector('.heading li a');
//     tmp[0].addEventListener('click' ,function() {
//         tmp[0].style.color = 'red';
//     });
// };

// myTitle.style.color = "red";

let a = document.querySelector('.heading li a');
a.onclick = function() {
    a.style.color = "red";
}

window.onload = function() {}
let b = document.querySelector('.main_content h1');
b.onclick = function() {
    b.style.color = "red";
}