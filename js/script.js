document.getElementById("section-one").addEventListener("click", function () {
    document.getElementById("section-one").classList.remove('background-section');
    document.getElementById("section-one").classList.add('background-section-mod');
    document.getElementById("window").style.display = "flex";
    const section = document.getElementById("section-one");
    const sectionAproveitar = document.getElementById("aproveitar");
    section.removeChild(sectionAproveitar);
});

