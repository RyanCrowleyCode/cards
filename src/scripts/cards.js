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

    const deleteButton = document.createElement("button")
    deleteButton.className = `padding delete--${number}`
    deleteButton.type = "button"
    deleteButton.id = "delete"
    deleteButton.textContent = "Delete"
    
    newElement.appendChild(newSection)
    newElement.appendChild(deleteButton)

    // put your delete button event listener in here and see what you can do!
    deleteButton.addEventListener("click", function () {
        // This finds the number listed on the delete button clicked
        const currentCardNumber = event.target.classList[1].split("-")[2]
        // Using the number from above, this finds the article that matches that number
        const currentCard = document.querySelector(`.card--${currentCardNumber}`)
        elementContainer.removeChild(currentCard)
    })

    return newElement
}

// Adding elements to the dom when the create button is clicked, if there is text in the text box
createButton.addEventListener("click", function (){
    if (textEl.value) {
        cardCounter += 1
        const addedEl = cardFactory(textEl.value, cardCounter)
        // this console log finds the number of the card
        // console.log(addedEl.classList[2].split("-")[2])
        elementContainer.appendChild(addedEl)
        textEl.value = ""

    }
})


