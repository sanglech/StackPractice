// Select text input
const textInput = document.getElementById('Name');// Store the value of the input in a variable
let aName = textInput.value;// When an input event is triggered update cityName
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
      let name = document.querySelector('.Name');
      let genre = document.querySelector('.Genre');
      let jName = document.querySelector('.Japanese_Name');
      let errorMessage = document.querySelector('.error-message');if (response.data.Name) {
        name.innerHTML = 'Name: ' + response.data.Name;
        genre.innerHTML = 'Genre: ' + response.data.Genre;
        jName.innerHTML = 'Japanese Name: ' + response.data.Japanese_Name;
      } else {
        errorMessage.innerHTML = "This anime is not in our database"
      }
    })
    .catch(function(error) {
      console.log(error);
    })// clear input
  textInput.value = '';
})