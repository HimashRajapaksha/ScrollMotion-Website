let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Adjust text position on scroll with a scaling factor for different screens
    text.style.transform = `translateY(${value * 2}px)`;

    // Parallax effect for leaf
    leaf.style.transform = `translate(${value * 1.2}px, ${value * -1.2}px)`;

    // Parallax effect for hills
    hill5.style.transform = `translateX(${value * 1.5}px)`;
    hill4.style.transform = `translateX(${-value * 1.5}px)`;
    hill1.style.transform = `translateY(${value * 0.8}px)`;
});
