function openTab(index){
    const contents = document.querySelectorAll(".tab-content");
    const buttons = document.querySelectorAll(".tab-buttons button");
    contents.forEach((c,i) => {
        c.classList.toggle("active", i===index);
        buttons[i].classList.toggle("active", i===index);
    });
}