const container = document.getElementById("container");
for (let i=0;i<256;i++) {
    const el = document.createElement("div");
    const value = 816/16;
    el.style.width = `${value}px`;
    el.style.height = `${value}px`;
    el.onmouseover = () => el.style.backgroundColor = "red";
    container.appendChild(el);
} 