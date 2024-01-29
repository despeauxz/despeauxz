document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    const navClose = document.getElementById('nav-close');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
    const tabs = document.querySelectorAll('[data-target');
    const tabContents = document.querySelectorAll('[data-content');
    const skillsContent = document.getElementsByClassName('skills__content');
    const skillsHeader = document.querySelectorAll('.skills__header');
    const modalViews = document.querySelectorAll('.services__modal');
    const modalBtns = document.querySelectorAll('.services__button');
    const modalCloses = document.querySelectorAll('.services__modal-close');
    const sections = document.querySelectorAll('section[id]');

    const toggleSkills = (e) => {
      let itemClass = e.target.parentNode.className;
  
      for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
      }
  
      if (itemClass === "skills__content skills__close") {
        e.target.parentNode.className = "skills__content skills__open";
      }
    }

    const scrollActive = () => {
      const scrollY = window.pageYOffset;
  
      sections?.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
  
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
      });
    }
  
    const scrollHeader = () => {
      const scrollY = window.pageYOffset;
      const nav = document.getElementById('header');
  
      if (scrollY >= 80) {
        nav.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header')
      }
    }
  
    const scrollUp = () => {
      const scrollY = window.pageYOffset;
      const scrollUp = document.getElementById('scroll-up');
      
      if (scrollY >= 560) {
        scrollUp.classList.add('show-scroll');
      } else {
        scrollUp.classList.remove('show-scroll')
      }
    }

    // Mobile responsiveness
    navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    });

    navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
    });
  
    tabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        const target = document.querySelector(tab.dataset.target);
        target.classList.add('qualification__active');
  
        tabContents.forEach(tabContent => {
          tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active');
  
        tabs.forEach(tab => {
          tab.classList.remove('qualification__active');
        });
        target.classList.add('qualification__active');
      });
    })

    // Modal
    modalCloses.forEach((modalClose) => {
      modalClose.addEventListener('click', () => {
        modalViews.forEach(modalView => {
          modalView.classList.remove('active-modal');
        });
      });
    });

    let modal = function(modalClick) {
      modalViews[modalClick].classList.add('active-modal');
    }

    modalBtns.forEach((modalBtn, i) => {
      modalBtn.addEventListener('click', () => {
        modal(i);
      })
    });

    // Nav links
    navLinks?.forEach(n => n.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
    }));

    skillsHeader.forEach((el) => {
      el.addEventListener("click", toggleSkills);
    });


    // On scroll of the navs
    window.addEventListener('scroll', scrollActive);
    window.addEventListener('scroll', scrollHeader);
    window.addEventListener('scroll', scrollUp);
  }
});
