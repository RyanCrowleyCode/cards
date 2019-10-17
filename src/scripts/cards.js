// Targeting elements on the DOM
const textEl = document.getElementById("text-box")
const createButton = document.getElementById("create")
const elementContainer = document.getElementById("new-element-container")

let cardCounter = 0

// Factory Function that creates a new DOM component
const cardFactory = (textString, number) => {
    const newElement = `
        <article class="border padding card--${number}">
            <section class="padding">${textString}</section>
            <button class="padding" type="button" id="delete">Delete</button>
        </article>
    `
    return newElement
}

// Adding elements to the dom when the create button is clicked, if there is text in the text box
createButton.addEventListener("click", function (){
    if (textEl.value) {
        cardCounter += 1
        const addedEl = cardFactory(textEl.value, cardCounter)
        elementContainer.innerHTML += addedEl
        textEl.value = ""
    }
})

// When the user clicks the Delete button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.
// elementContainer.addEventListener()
