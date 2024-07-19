




//Aqui envia la busqueda directamente a google
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var query = document.getElementById('searchInput').value;
  window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
});

//Validacion de datos

document.getElementById("formulario").addEventListener('submit', function(event){
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let mail =document.getElementById("mail").value;
  let mailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(nombre ==="" || apellido ==="" || !mailValid.test(mail)){
    alert("Por favor completa todos los campos");
    event.preventDefault();
  }
  
});

//Modo oscuro o claro

document.addEventListener('DOMContentLoaded', function() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  themeToggleBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      const isDarkMode = document.body.classList.contains('dark-mode');
      themeToggleBtn.textContent = isDarkMode ? 'Modo claro' : 'Modo oscuro';
  });
});



  