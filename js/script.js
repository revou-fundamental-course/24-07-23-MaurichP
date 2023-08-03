function validateForm() {
    var name = document.getElementById("nama").value.trim();
    var email = document.getElementById("email").value.trim();
    var destination = document.getElementById("destination").value;
    console.log(name);
  
    if (name === "") {
      alert("Name cannot be empty.");
      return false;
    }
  
    if (name.length < 3 || name.length > 30) {
      alert("must contain atleast 3 to 30 characters.");
      return false;
    }
  
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Email not valid.");
      return false;
    }
  
    if (destination === "0") {
      alert("Please choose a destination.");
      return false;
    }
  
    return true;
  }