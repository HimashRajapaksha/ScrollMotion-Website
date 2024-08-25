let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

let textContinuation = document.getElementById("text-continuation");
let leaf2 = document.getElementById("leaf-2");
let hill2_2 = document.getElementById("hill2-2");
let tree2 = document.getElementById("tree-2");

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Parallax effect for the first section
    text.style.transform = `translateY(${value * 0.5}px)`;
    leaf.style.transform = `translate(${value * 0.5}px, ${value * -0.5}px)`;
    hill5.style.transform = `translateX(${value * 0.5}px)`;
    hill4.style.transform = `translateX(${value * -0.5}px)`;
    hill1.style.transform = `translateY(${value * 0.25}px)`;

    // Parallax effect for the second section
    textContinuation.style.transform = `translateY(${value * 0.3}px)`;
    leaf2.style.transform = `translate(${value * 0.4}px, ${value * -0.4}px)`;
    hill2_2.style.transform = `translateX(${value * 0.4}px)`;
    tree2.style.transform = `translateX(${value * -0.4}px)`;
});
