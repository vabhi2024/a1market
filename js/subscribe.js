function subscribe(e){
  e.preventDefault();

  const email = document.getElementById("email").value.trim();

  if(email === ""){
    alert("Please enter your email");
    return;
  }

  // Redirect to YouTube Subscribe Confirmation Page
  window.location.href = "https://www.youtube.com/@adxmow?sub_confirmation=1";
}