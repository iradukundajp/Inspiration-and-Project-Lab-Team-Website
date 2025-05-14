/**
 * ShareHub - Neighborhood Resource Sharing App Documentation
 * Modern JavaScript with smooth animations, scroll effects, and responsive design
 */

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const hamburger = document.querySelector('.hamburger') || createHamburger();
    const navMenu = document.querySelector('.nav-menu');
    const sections = document.querySelectorAll('section');
    const sectionTitles = document.querySelectorAll('.section-title');
    const cards = document.querySelectorAll('.card');
    const progressBars = document.querySelectorAll('.progress-value');
  
    // Create mobile menu hamburger button if it doesn't exist
    function createHamburger() {
      const hamburgerBtn = document.createElement('button');
      hamburgerBtn.className = 'hamburger';
      hamburgerBtn.innerHTML = `
        <span></span>
        <span></span>
        <span></span>
      `;
      navbar.appendChild(hamburgerBtn);
      return hamburgerBtn;
    }
    
    // Initialize Intersection Observer for animation on scroll
    function initIntersectionObserver() {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, options);
      
      // Observe section titles for animation
      sectionTitles.forEach(title => {
        observer.observe(title);
      });
      
      // Observe cards for animation
      cards.forEach(card => {
        observer.observe(card);
      });
    }
    
    // Handle scroll events
    function handleScroll() {
      const scrollPosition = window.scrollY;
      
      // Navbar shadow on scroll (always have shadow for better visibility)
      if (scrollPosition > 10) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      // Update active link based on current section
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = section.getAttribute('id');
        }
      });
      
      navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    }
    
    // Smooth scrolling for navigation links
    function initSmoothScroll() {
      navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          
          // Close mobile menu if open
          if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
          }
          
          const targetId = link.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        });
      });
      
      // Smooth scroll for hero button
      const heroBtn = document.querySelector('.hero .btn');
      if (heroBtn) {
        heroBtn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = heroBtn.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: 'smooth'
            });
          }
        });
      }
    }
    
    // Animate progress bars
    function animateProgressBars() {
      const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBar = entry.target;
            const width = progressBar.style.width;
            
            // Reset width to trigger animation
            progressBar.style.width = '0%';
            
            // Force a reflow to ensure the initial width is applied
            void progressBar.offsetWidth;
            
            // Set the final width to animate to
            setTimeout(() => {
              progressBar.style.width = width;
            }, 100);
            
            progressObserver.unobserve(progressBar);
          }
        });
      }, { threshold: 0.2 });
      
      progressBars.forEach(bar => {
        progressObserver.observe(bar);
      });
    }
    
    // Mobile menu toggle
    function initMobileMenu() {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('menu-open');
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.classList.remove('menu-open');
        }
      });
    }
    
    // Add interactive hover effects
    function initInteractiveElements() {
      // Card hover effect
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
        });
      });
      
      // Example cards hover effect
      const exampleCards = document.querySelectorAll('.example-card');
      exampleCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          card.style.transform = 'translateY(-8px)';
          card.style.boxShadow = 'var(--shadow-lg)';
        });
        
        card.addEventListener('mouseleave', () => {
          card.style.transform = '';
          card.style.boxShadow = '';
        });
      });
      
      // Team member cards hover effect
      const teamMembers = document.querySelectorAll('.team-member');
      teamMembers.forEach(member => {
        member.addEventListener('mouseenter', () => {
          member.style.transform = 'translateY(-8px)';
          member.style.boxShadow = 'var(--shadow-lg)';
        });
        
        member.addEventListener('mouseleave', () => {
          member.style.transform = '';
          member.style.boxShadow = '';
        });
      });
    }
    
    // Make tables responsive
    function enhanceTables() {
      const tables = document.querySelectorAll('table:not(.responsive-table)');
      
      tables.forEach(table => {
        // Check if table is already wrapped
        if (!table.parentElement.classList.contains('table-responsive')) {
          // Wrap table in a responsive container
          const wrapper = document.createElement('div');
          wrapper.className = 'table-responsive';
          table.parentNode.insertBefore(wrapper, table);
          wrapper.appendChild(table);
          
          // Add responsive-table class to prevent re-wrapping
          table.classList.add('responsive-table');
        }
      });
    }
    
    // Initialize highlight current section in navbar
    function highlightCurrentSection() {
      // Get the current section from URL hash or default to first section
      let currentSection = window.location.hash;
      
      if (!currentSection || !document.querySelector(currentSection)) {
        currentSection = navLinks[0]?.getAttribute('href');
      }
      
      // Set active class for current section link
      navLinks.forEach(link => {
        if (link.getAttribute('href') === currentSection) {
          link.classList.add('active');
        }
      });
    }
    
    // Initialize everything
    function init() {
      // Set up mobile menu toggle
      initMobileMenu();
      
      // Initialize observers and animations
      initIntersectionObserver();
      initSmoothScroll();
      animateProgressBars();
      initInteractiveElements();
      enhanceTables();
      
      // Highlight current section
      highlightCurrentSection();
      
      // Initial scroll check to set active state
      handleScroll();
      
      // Add scroll event listener with throttling for better performance
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            handleScroll();
            ticking = false;
          });
          ticking = true;
        }
      });
      
      // Add resize event listener for responsive adjustments
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.classList.remove('menu-open');
        }
        enhanceTables();
      });
    }
    
    // Start the application
    init();
  });