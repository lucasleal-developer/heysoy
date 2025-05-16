// Menu Mobile
const menuMobile = document.querySelector('.menu-mobile');
const nav = document.querySelector('.nav');

menuMobile.addEventListener('click', () => {
    nav.classList.toggle('active');
    
    // Alterna o ícone do menu
    if (nav.classList.contains('active')) {
        menuMobile.innerHTML = '<i class="fas fa-times"></i>';
    } else {
        menuMobile.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuMobile.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Botão Voltar ao Topo
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('active');
    } else {
        backToTopButton.classList.remove('active');
    }
});

// Efeito de rolagem suave para os links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Efeito de revelação ao rolar
const revealElements = document.querySelectorAll('.card, .galeria-item, .sobre-img, .contato-info, .contato-form');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.8;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Aplicar estilo inicial aos elementos
revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Verificar elementos ao carregar a página
window.addEventListener('load', checkReveal);

// Verificar elementos ao rolar a página
window.addEventListener('scroll', checkReveal);

// Animação para os cards de pontos turísticos
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Galeria de imagens com efeito de zoom
const galeriaItems = document.querySelectorAll('.galeria-item');

galeriaItems.forEach(item => {
    item.addEventListener('click', () => {
        // Aqui poderia ser implementado um lightbox para visualização das imagens
        // Por simplicidade, apenas adicionamos um efeito de zoom
        const img = item.querySelector('img');
        img.style.transform = img.style.transform === 'scale(1.2)' ? 'scale(1)' : 'scale(1.2)';
    });
});

// Formulário de contato
const form = document.querySelector('.contato-form form');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulação de envio de formulário
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            form.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
}

// Efeito de mudança de cor no header ao rolar
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});
