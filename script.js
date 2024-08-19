document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".section");
  const windowHeight = window.innerHeight;

  function checkSections() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;

      if (sectionTop - windowHeight <= 0) {
        section.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkSections);
  checkSections(); 
});

document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector('.header');

  function checkHeaderColor() {
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition >= 100) {
      header.classList.add('black-bg');
    } else {
      header.classList.remove('black-bg');
    }
  }

  window.addEventListener('scroll', checkHeaderColor);
  checkHeaderColor(); 
});


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);

  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 7000); 
});




const titulo = document.querySelector('.titulo');
    const texto = "Apollo"; 
    titulo.textContent = ''; 

    let index = 0;
    function typeWriter() {
      if (index <= texto.length) {
        titulo.innerHTML = texto.substring(0, index).replace(/\n/g, "<br/>"); 
        titulo.innerHTML += '<span class="cursor"></span>'; 
        index++;
        setTimeout(typeWriter, 200); 
      }
    }

   
    typeWriter();

    const menuBtn = document.querySelector('.menu-btn');
    const sidebarMenu = document.querySelector('.sidebar-menu');

    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('menu-active');
      if (sidebarMenu.style.display === 'block') {
        sidebarMenu.style.display = 'none';
      } else {
        sidebarMenu.style.display = 'block';
      }
    });

    const menuLinks = document.querySelectorAll('.sidebar-menu a');

    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('menu-active');
        sidebarMenu.style.display = 'none';
      });
    });






    var logoImage = document.getElementById("logoImage");

  
    logoImage.addEventListener("click", function() {
    
      window.scrollTo(0, 0);
    });


    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();  
      fetch(event.target.action, {
          method: 'POST',
          body: new FormData(event.target),
          headers: {
              'Accept': 'application/json'
          }
      }).then(response => {
          if (response.ok) {
             
              event.target.reset();
              alert('Mensagem enviada com sucesso!');
          } else {
              alert('Houve um erro ao enviar a mensagem.');
          }
      }).catch(error => {
          alert('Houve um erro ao enviar a mensagem.');
      });
  });