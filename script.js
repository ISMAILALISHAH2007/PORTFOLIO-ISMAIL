document.addEventListener('DOMContentLoaded', () => {
  // Initialize Particles.js
  particlesJS('particles-js', {
      particles: {
          number: {
              value: 80,
              density: {
                  enable: true,
                  value_area: 800
              }
          },
          color: {
              value: '#00bcd4'
          },
          shape: {
              type: 'circle'
          },
          opacity: {
              value: 0.5,
              random: false
          },
          size: {
              value: 3,
              random: true
          },
          line_linked: {
              enable: true,
              distance: 150,
              color: '#00bcd4',
              opacity: 0.4,
              width: 1
          },
          move: {
              enable: true,
              speed: 6,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false
          }
      },
      interactivity: {
          detect_on: 'canvas',
          events: {
              onhover: {
                  enable: true,
                  mode: 'repulse'
              },
              onclick: {
                  enable: true,
                  mode: 'push'
              },
              resize: true
          }
      },
      retina_detect: true
  });

  // Initialize Typing Animation
  const typed = new Typed('#typing', {
      strings: [
          'Full Stack Developer',
          'UI/UX Designer',
          'Problem Solver',
          'Tech Enthusiast'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      backDelay: 1500
  });

  // Navigation Menu Toggle
  const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');
  
  menuIcon?.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuIcon.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
  });

  // Close menu when clicking links
  document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
          navLinks.classList.remove('active');
          const icon = menuIcon.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
      });
  });

  // GSAP Animations
  gsap.registerPlugin(ScrollTrigger);

  // Hero Animation
  gsap.from('.hero-content', {
      y: 50,
      duration: 1,
      ease: 'power3.out'
  });

  // About Section Animation
  gsap.from('.about-content', {
      scrollTrigger: {
          trigger: '.about-content',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
      },
      y: 50,
      duration: 1
  });

  // Skills Animation
  gsap.utils.toArray('.skill-level').forEach(bar => {
      const width = bar.style.width;
      bar.style.width = 0;
      
      gsap.to(bar, {
          scrollTrigger: {
              trigger: bar,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse'
          },
          width: width,
          duration: 1.5,
          ease: 'power2.out'
      });
  });

  // Project Cards Animation
  gsap.from('.project-card', {
      scrollTrigger: {
          trigger: '.projects-container',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
      },
      y: 50,
      duration: 1,
      stagger: {
          amount: 0.5,
          from: "start"
      }
  });

  // Contact Form Animation
  gsap.from('.contact-form', {
      scrollTrigger: {
          trigger: '.contact-form',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
      },
      y: 30,
      duration: 1
  });

  // Scroll to Top Button
  const scrollButton = document.getElementById('scroll-to-top');
  
  window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
          scrollButton.style.display = 'flex';
      } else {
          scrollButton.style.display = 'none';
      }
  });

  scrollButton?.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  
  contactForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      try {
          // Here you would typically send the data to a server
          console.log('Form submitted:', data);
          
          // Show success message
          alert('Thank you for your message! I will get back to you soon.');
          contactForm.reset();
      } catch (error) {
          console.error('Error submitting form:', error);
          alert('There was an error sending your message. Please try again.');
      }
  });

  // Update Copyright Year
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
  }
});