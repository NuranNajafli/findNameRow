
let person = [
    { id: 1, firstname: "Nuran", lastname: "Najafli", age: 23 },
    { id: 2, firstname: "cefer", lastname: "ceferli", age: 43 },
    { id: 3, firstname: "nurcan", lastname: "leysanli", age: 13 },
    { id: 4, firstname: "nivat", lastname: "mammadov", age: 53 }


]
let tbody = document.getElementById("tbody")

person.map((a) => {
    tbody.innerHTML += ` <tr>
    <td>${a.id}</td>
    <td>${a.firstname}</td>
    <td>${a.lastname}</td>
    <td>${a.age}</td>
    
    </tr>`
})

let input = document.getElementById("input")

input.addEventListener("input", (e) => {

    let txt = e.target.value.toLowerCase()
    let cells = [...document.querySelectorAll("tbody tr td:nth-of-type(2)")]

    cells.map((a) => {
        a.parentElement.classList.remove("hide")
        if (!a.innerText.toLowerCase().startsWith(txt)) {
            a.parentElement.classList.add("hide")
        }
    })

})
