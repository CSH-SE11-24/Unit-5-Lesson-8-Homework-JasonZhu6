console.log("Script running...")
// Task 1: Button One Flow
// Select the first button
let btn1 = document.querySelector("#buttonOne")

// Select the first p tag under that button
let txt1 = document.querySelector("#textOne")

// Add an event listener to the button such that when it's clicked, the p tag text says "You guessed wrong"
btn1.addEventListener("click", function() {
  txt1.textContent = "You guessed wrong..."
})

// Task 2: Button Two Flow
// In index.html, add the IDs to the second button and p tag
// Select the second button and p tags
let btn2 = document.querySelector("#buttonTwo")
let txt2 = document.querySelector("#textTwo")


// Add an event listener to the second button such that when it's clicked, the p tag text is "You guessed right!"
btn2.addEventListener("click", function() {
  txt2.textContent = "You guessed right!!!"
})


// Task 3: Dog image flow
// Select the dog image
let dogImg = document.querySelector("#dog")

// Add an event listener to the dog image such that when the mouse is over it, the image src becomes post-boop.png
// Yellow: You can do this on click
dogImg.addEventListener("mouseover", function() {
  dogImg.src = "post-boop.png"
})


// Add an event listener to the dog image such that when the mouse is off it, the image src becomes pre-boop.jpeg
// Yellow: You can skip this
dogImg.addEventListener("mouseout", function() {
  dogImg.src = "pre-boop.png"
})


// Task 4: Secret code flow
// Select the input
let secretCode = document.querySelector("#code")


// Add an event listener to the input such that when a key is pressed, you console log the value
// Extra credit: check if the value is "racoon." If it is, add the racoon.jpg image to the div below (you will need to select it first)
let checkRacoon = document.querySelector("#result")
secretCode.addEventListener("keypress", function() {
  console.log(secretCode.value)

  if (secretCode.value.toLowerCase() == "raccoon") {
    let newRaccoonImg = document.createElement("img")
    newRaccoonImg.src = "raccoon.jpg"

    checkRacoon.appendChild(newRaccoonImg)
  }
})

