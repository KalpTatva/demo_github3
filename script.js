const btn = document.querySelector(".buttonclass")
const body = document.querySelector("body")
btn.addEventListener("click", () => {
    var rgbString = colors();

    body.style.backgroundColor = rgbString;
})

function colors() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    console.log(r, g, b)
    return `rgb(${r}, ${g}, ${b})`;
}