// Select text input
const textInput = document.getElementById('Name');// Store the value of the input in a variable
let aName = textInput.value;// When an input event is triggered update
textInput.addEventListener('input', function(e) {
    aName = e.target.value;
})// Select our form
const form = document.querySelector('form');// When form is submitted print 'submitted' to the browser console
form.addEventListener('submit', function(e) {
  // prevent form default behavior
  e.preventDefault();// make request to our API
  axios.get('http://localhost:3000/anime/?name=' + aName)
    .then(function(response) {
      // select elements
      //console.log("RESPONSE:"+JSON.stringify(response)); PrintJSON Response for debugging purposes
      let name = document.querySelector('.Name');
      let genre = document.querySelector('.Genre');
      let jName = document.querySelector('.Japanese_Name');
      let errorMessage = document.querySelector('.error-message');if (response.data.aName) {
        name.innerHTML = 'Name: ' + response.data.aName;
        genre.innerHTML = 'Genre: ' + response.data.genre;
        jName.innerHTML = 'Japanese Name: ' + response.data.jName;
        document.getElementById("aImg").src = response.data.imgSrc;
      } else {
        errorMessage.innerHTML = "This anime is not in our database"
      }
    })
    .catch(function(error) {
      console.log(error);
    })// clear input
  textInput.value = '';
})