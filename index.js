// Your code goes here

const rootDiv = document.getElementById("root")

const appDiv = document.createElement("div")
const headerElement = document.createElement("header")
const h1Element = document.createElement("h1")
const spanH1Element = document.createElement("span")

appDiv.className = "app"

h1Element.textContent = "Flatapets"

spanH1Element.className = "logo"
spanH1Element.textContent = "🐈"

h1Element.appendChild(spanH1Element)
headerElement.append(h1Element)
appDiv.appendChild(headerElement)
rootDiv.appendChild(appDiv)



const ulElement = document.createElement("ul")
ulElement.className = "pet-list"

appDiv.appendChild(ulElement)

function liCreator(pet, list){
    const listElement = document.createElement("li")

    
    const imgElement = document.createElement("img")
    const h4Element = document.createElement("h4")
    
    listElement.className = "pet"

    imgElement.src = pet.image
    imgElement.alt = pet.name
    h4Element.textContent = pet.name

    listElement.appendChild(imgElement)

    listElement.appendChild(h4Element)

    list.appendChild(listElement)

}

fetch("http://localhost:3000/pets")
.then(reponse => reponse.json())
.then(data => {
    data.forEach(item =>{
        liCreator(item, ulElement)
    })
})

