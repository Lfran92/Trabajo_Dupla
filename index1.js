




//Aqui envia la busqueda directamente a google
document.getElementById('searchForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var query = document.getElementById('searchInput').value;
  window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(query);
});

//Validacion de datos

$(document).ready(function() {
  $('#formulario').on('submit', function(event) {
      // Limpiar mensajes de error previos
      $('.error').text('');

      // Obtener valores de los campos
      let nombre = $('#nombre').val();
      let apellido = $('#apellido').val();
      let mail = $('#mail').val();
      let mailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      let isValid = true;

      // Validar campos
      if (nombre === "") {
          $('#nombreError').text('Por favor, completa el campo de nombre.');
          isValid = false;
          event.preventDefault();
      }else if (apellido === "") {
          $('#apellidoError').text('Por favor, completa el campo de apellido.');
          isValid = false;
          event.preventDefault();
      }else if (!mailValid.test(mail)) {
          $('#mailError').text('Por favor, ingresa un correo electrónico válido.');
          isValid = false;
          event.preventDefault();
      }else if (!isValid) {
          event.preventDefault();
      }else{
        $(this).trigger('reset');
        event.preventDefault();
      }
  });
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


const carousel = document.getElementById('carouselExampleIndicators');
const carouselInner = carousel.querySelector('.carousel-inner');

// Preload images
const images = carousel.querySelectorAll('img');
images.forEach(img => {
  const newImg = new Image();
  newImg.src = img.src;
});

carousel.addEventListener('slide.bs.carousel', function (event) {
  const activeItem = event.relatedTarget;
  const newHeight = activeItem.querySelector('img').offsetHeight;
  carouselInner.style.height = `${newHeight}px`;
});


  
