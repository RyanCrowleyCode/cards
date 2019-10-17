// Targeting elements on the DOM
const textEl = document.getElementById("text-box")
const createButton = document.getElementById("create")
const elementContainer = document.getElementById("new-element-container")

let cardCounter = 0

// Factory Function that creates a new DOM component
const cardFactory = (textString, number) => {
    const newElement = document.createElement("article")
    newElement.className = `border padding card--${number}`

    const newSection = document.createElement("section")
    newSection.className = "padding"
    newSection.textContent = `${textString}`

    const newButton = document.createElement("button")
    newButton.className = `padding delete--${number}`
    newButton.type = "button"
    newButton.id = "delete"
    newButton.textContent = "Delete"
    
    newElement.appendChild(newSection)
    newElement.appendChild(newButton)
    return newElement
}

// Adding elements to the dom when the create button is clicked, if there is text in the text box
createButton.addEventListener("click", function (){
    if (textEl.value) {
        cardCounter += 1
        const addedEl = cardFactory(textEl.value, cardCounter)
        console.log(addedEl)
        elementContainer.appendChild(addedEl)
        textEl.value = ""
    }
})

// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

