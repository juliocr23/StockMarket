$(".signInBtn").click(function(event){

var email = $("#inputEmail").val();
var password = $("#inputPassword").val();

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;

  console.log(errorCode);
  console.log(errorMessage);
});




});
