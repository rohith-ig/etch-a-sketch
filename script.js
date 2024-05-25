const container = document.getElementById("container");
let  grid = 10;
function createGrid() {
    container.innerHTML = '';
    for (let i=0;i<(grid*grid);i++) {
        const el = document.createElement("div");
        const value = 650/grid;
        el.style.width = `${value}px`;
        el.style.height = `${value}px`;
        el.onmouseover = () => el.style.backgroundColor = "red";
        container.appendChild(el);
    } 
}
createGrid();
const button = document.getElementById("change");
button.onclick = () => {
    let a = prompt("Change grid size: Enter a value from 1 to 100!","10");
    while (a>100 || a<1) {
        prompt("Enter a value between 1 and 100");
        a = prompt("Change grid size: Enter a value from 1 to 100!","10");
    }
    grid = parseInt(a);
    createGrid();

}
const button2 = document.getElementById("clear");
button2.onclick = () => {
    for (child of container.childNodes) child.style.backgroundColor = "white";
}