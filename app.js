const title = document.querySelector("div.hello h1");

function handleTitleClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}

function handleMouseEneter() {
    title.innerText = "Mouse is here!";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEneter);
title.addEventListener("mouseleave", handleMouseLeave);