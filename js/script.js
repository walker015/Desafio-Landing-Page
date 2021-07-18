const form = document.getElementById('formulario')
const mediaQueryList = window.matchMedia("(max-width: 700px)")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let data = {
        name,
        email
    }
    let converData = JSON.stringify(data)

    localStorage.setItem('lead', converData)
})

document.getElementById("section-one").addEventListener("click", function () {
    document.getElementById("section-one").style.display = "none"
    const section = document.getElementById("section-one")
    const sectionAproveitar = document.getElementById("aproveitar")
    section.removeChild(sectionAproveitar)

    if (mediaQueryList.matches) {
        document.getElementById("section-two").style.display = "grid"
        document.getElementById("window").style.display = "grid"
        document.getElementById("div-one").style.display = "grid"
        document.getElementById("section-two").classList.remove("section")
    } else {
        document.getElementById("section-two").style.display = "flex"
        document.getElementById("window").style.display = "flex"
    }
});

