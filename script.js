window.addEventListener('scroll', () => {
    let value = window.scrollY;

    // Original parallax effects
    text.style.transform = `translateY(${value * 2}px)`;
    leaf.style.transform = `translate(${value * 1.2}px, ${value * -1.2}px)`;
    hill5.style.transform = `translateX(${value * 1.5}px)`;
    hill4.style.transform = `translateX(${-value * 1.5}px)`;
    hill1.style.transform = `translateY(${value * 0.8}px)`;

    // New parallax continuation
    document.getElementById('text-continuation').style.transform = `translateY(${value * 1.5}px)`;
    document.getElementById('leaf-2').style.transform = `translate(${value * 1}px, ${value * -1}px)`;
    document.getElementById('hill2-2').style.transform = `translateX(${value * 1.2}px)`;
    document.getElementById('tree-2').style.transform = `translateX(${-value * 1.2}px)`;
});
