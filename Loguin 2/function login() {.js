function login() {
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
  
   
   
    if (email.trim() === "" || password.trim() === "" || name.trim() === "") {
      document.getElementById("message").innerHTML = "Por favor, complete todos los campos";
      return;
    }
  
 
    document.getElementById("message").innerHTML = "Inicio de sesión exitoso";
    
    
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("name").value = "";
  }
 
