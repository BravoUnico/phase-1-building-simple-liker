// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// Your JavaScript code goes here!
//document.getElementsByClassName(".like").addEventlistener("click", mimicServerCall)
const numberOfHeart = document.querySelectorAll(".like-glyph")
for (const i of numberOfHeart) {

  i.addEventListener("click", coloredHeart) }
   
  
  

function coloredHeart(e) {
  const heart = e.target
  // console.log(heart.className)
  mimicServerCall()   //making sever request
  .then(function()  { 
    if ( heart.textContent === EMPTY_HEART) {
        heart.textContent = FULL_HEART
        heart.className = "activated-heart"
    }else{
        heart.textContent = EMPTY_HEART
        heart.className = ""
    }
  }) 
  .catch((error) => {
    const errorMessage = document.getElementById('modal');
    console.log(errorMessage)
    errorMessage.className = ""
    errorMessage.innerText = error
    setTimeout(() => errorMessage.className = "hidden", 3000)
  })
}











//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



