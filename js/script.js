const form = document.getElementById('formulario')

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
    document.getElementById("section-one").classList.remove('background-section')
    document.getElementById("section-one").classList.add('background-section-mod')
    document.getElementById("window").style.display = "flex"
    const section = document.getElementById("section-one")
    const sectionAproveitar = document.getElementById("aproveitar")
    section.removeChild(sectionAproveitar)
});

