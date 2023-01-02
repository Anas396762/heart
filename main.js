let icon = document.querySelector(".heart i");
let name = document.querySelector("input");
let btn = document.querySelector("button");
btn.onclick = function () {
    if(name.value == "tagwa") {
        icon.style.cssText = `animation: brock ease-in-out 3s 1;`;
    }
}
