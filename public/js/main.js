//1
let input1 = document.getElementsByTagName('input')[0];
input1.addEventListener('focus', ()=>{
    input1.style.backgroundColor = "blue";
});

//2
let input2 = document.getElementsByTagName('input')[1];
input2.addEventListener('focus', ()=>{
    input2.style.backgroundColor = "blue";
});
input2.addEventListener('focusout',()=>{
    input2.style.backgroundColor = "transparent";
});

//3
let p1 = document.getElementsByClassName('premierParagraphe')[0];
let p2 = document.getElementsByClassName('secondParagraphe')[0];
let p3 = document.getElementsByClassName('dernierParagraphe')[0];
let btn = document.getElementsByClassName('buttonExo')[0];
let text = p2.innerText;

btn.addEventListener('click', ()=>{
    p1.innerText = text;
    p3.innerText = text;
});

//4
let nvxNom;
let btn2 = document.getElementsByClassName('buttonExo')[1];
let p4 = document.getElementById("exo4");

btn2.addEventListener("click", ()=>{
    nvxNom = document.getElementsByTagName('input')[2].value;
    p4.innerText = nvxNom;
});

//5

let p5 = document.getElementsByTagName('p')[4];
let path = p5.innerText.split(" ");
let btn3 = document.getElementsByTagName('button')[2];
let img = document.getElementsByTagName('img')[0];

btn3.addEventListener('click', ()=>{
    img.setAttribute('src', path[2]);
});

//6
let img2 = document.getElementsByTagName('img')[1];
let img3 = document.getElementsByTagName('img')[2];
let path2; 

img2.addEventListener('click',()=>{
    path2 = img2.getAttribute('src');
});

img3.addEventListener('click', ()=>{
    img3.setAttribute('src', path2);
});

//7
let p6 = document.getElementsByTagName('p')[5];
let p7 = document.getElementsByTagName('p')[6];
let btn4 = document.getElementsByTagName('button')[3];

btn4.addEventListener('click', ()=>{
    [p6.innerText,p7.innerText] = [p7.innerText, p6.innerText];
});
