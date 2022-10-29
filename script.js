// Function that updates elements in the document upon submission of form
function formSubmit() {
  let food = document.forms["myform"]["food"].value;
  let color = document.forms["myform"]["favcolor"].value;
  let review = document.forms["myform"]["enjoy"].value;
  // Change innerHTML
  document.getElementById("favoriteFood").innerHTML = food;
  document.getElementById("favoriteColor").style.width = 50;
  document.getElementById("favoriteColor").style.backgroundColor = color;
  document.getElementById("yourThoughts").innerHTML = review;
}