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
  checkSections(); // Para verificar as seções ao carregar a página
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
  checkHeaderColor(); // Para verificar ao carregar a página
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
  }, 7000); // Trocar de slide a cada 3 segundos
});




const titulo = document.querySelector('.titulo');
    const texto = "Apollo"; // Adiciona uma quebra de linha (\n) entre "Cosmo" e "Tec"
    titulo.textContent = ''; // Limpa o conteúdo inicial

    let index = 0;
    function typeWriter() {
      if (index <= texto.length) {
        titulo.innerHTML = texto.substring(0, index).replace(/\n/g, "<br/>"); // Substitui \n por quebra de linha HTML
        titulo.innerHTML += '<span class="cursor"></span>'; // Adiciona o cursor após cada caractere
        index++;
        setTimeout(typeWriter, 200); // Ajuste o tempo para o efeito de digitação
      }
    }

    // Chama a função ao carregar a página
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

    // Adicionando um evento de clique à imagem
    logoImage.addEventListener("click", function() {
      // Fazendo a página rolar imediatamente até o topo
      window.scrollTo(0, 0);
    });


    document.getElementById('contactForm').addEventListener('submit', function(event) {
      event.preventDefault();  // Impede o envio padrão do formulário

      fetch(event.target.action, {
          method: 'POST',
          body: new FormData(event.target),
          headers: {
              'Accept': 'application/json'
          }
      }).then(response => {
          if (response.ok) {
              // Limpa o formulário após o envio
              event.target.reset();
              alert('Mensagem enviada com sucesso!');
          } else {
              alert('Houve um erro ao enviar a mensagem.');
          }
      }).catch(error => {
          alert('Houve um erro ao enviar a mensagem.');
      });
  });