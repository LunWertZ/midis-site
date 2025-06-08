
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navList = document.querySelector('.nav__list');
  
  if (mobileMenuBtn && navList) {
    mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      navList.classList.toggle('active');
    });
  }
  
  // dark \ light
  const themeBtns = document.querySelectorAll('.theme-btn');
  const body = document.body;
  
  if (themeBtns.length > 0) {
    themeBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        themeBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });
    
  }
  
  // Активная ссылка в меню
  const navLinks = document.querySelectorAll('.nav__link');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if ((currentPage === linkPage) || 
        (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
});

// Объекты
if (document.querySelector('.properties-grid')) {
  // Филльтры 
  const priceRange = document.getElementById('price');
  const currentPrice = document.getElementById('current-price');
  
  if (priceRange && currentPrice) {
    priceRange.addEventListener('input', function() {
      currentPrice.textContent = this.value;
    });
    
    const filterForm = document.querySelector('.filter-form');
    filterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Фильтры применены!');
    });
    
    filterForm.addEventListener('reset', function() {
      currentPrice.textContent = '100';
    });
  }
  
  // Модал окна
  const propertyCards = document.querySelectorAll('.property-card__btn, .property-btn');
  const modal = document.getElementById('property-modal');
  
  if (modal) {
    const modalTitle = modal.querySelector('.modal__title');
    const modalImage = modal.querySelector('.modal__image');
    const modalInfo = modal.querySelector('.modal__info');
    const modalClose = modal.querySelector('.modal__close');
    
    propertyCards.forEach(card => {
      card.addEventListener('click', function() {
        const cardContent = this.closest('.property-card__content') || 
                          this.closest('.property-content');
        const name = cardContent.querySelector('.property-title, .property-card__name').textContent;
        const address = cardContent.querySelector('.property-location, .property-card__address').textContent;
        const price = cardContent.querySelector('.property-price, .property-card__price').textContent;
        const imageSrc = cardContent.closest('.property-card').querySelector('img').src;
        
        modalTitle.textContent = name;
        modalImage.src = imageSrc;
        modalImage.alt = name;
        modalInfo.innerHTML = `
          <p><strong>Адрес:</strong> ${address}</p>
          <p><strong>Цена:</strong> ${price}</p>
          <p>Этот уникальный дом в пустыне сочетает современные технологии и традиционный дизайн. 
          Полностью автономные системы жизнеобеспечения делают его идеальным для жизни в любых условиях.</p>
          <ul>
            <li>Площадь: 250-400 м²</li>
            <li>Спальни: 3-5</li>
            <li>Ванные: 2-4</li>
            <li>Бассейн: есть</li>
            <li>Гараж: на 2 машины</li>
          </ul>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });
    
    modalClose.addEventListener('click', function() {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
      }
    });
  }
}

// Blog
if (document.querySelector('.pagination')) {
  const paginationBtns = document.querySelectorAll('.pagination-btn');
  
  paginationBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      paginationBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      alert('test');
    });
  });
}

// контакты
if (document.querySelector('.faq-accordion')) {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', function() {
      item.classList.toggle('active');
    });
  });
  
  // Валидация формы обратной связи
  const feedbackForm = document.querySelector('.feedback-form');
  
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameInput = this.querySelector('#name');
      const phoneInput = this.querySelector('#phone');
      const emailInput = this.querySelector('#email');
      const agreeCheckbox = this.querySelector('#agree');
      
      if (!nameInput.value.trim()) {
        alert('Пожалуйста, введите ваше имя');
        nameInput.focus();
        return;
      }
      
      if (!phoneInput.value.trim()) {
        alert('Пожалуйста, введите ваш телефон');
        phoneInput.focus();
        return;
      }
      
      if (!emailInput.value.trim() || !emailInput.validity.valid) {
        alert('Пожалуйста, введите корректный email');
        emailInput.focus();
        return;
      }
      
      if (!agreeCheckbox.checked) {
        alert('Необходимо согласие на обработку персональных данных');
        return;
      }
      
      alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
      this.reset();
    });
  }
}

// Функции для страницы "Услуги"
if (document.querySelector('.pricing-cards')) {
  const pricingBtns = document.querySelectorAll('.pricing-btn');
  
  pricingBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const card = this.closest('.pricing-card');
      const title = card.querySelector('h3').textContent;
      alert(`Вы выбрали тариф "${title}"`);
    });
  });
}