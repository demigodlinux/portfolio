// Enhanced Portfolio Application with Advanced Animations - Fixed Version
class PortfolioApp {
  constructor() {
    this.data = {
      personalInfo: {
        name: "Alex Johnson",
        title: "Full Stack Developer",
        email: "alex.johnson@example.com",
        phone: "+1 (555) 123-4567",
        location: "San Francisco, CA",
        bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications using modern technologies. Specializing in Angular, Node.js, and cloud architecture.",
        resume: "/assets/resume.pdf",
        social: {
          github: "https://github.com/alexjohnson",
          linkedin: "https://linkedin.com/in/alexjohnson",
          twitter: "https://twitter.com/alexjohnson"
        }
      },
      skills: {
        frontend: [
          {"name": "Angular", "level": 95},
          {"name": "TypeScript", "level": 90},
          {"name": "Node.js", "level": 80},
          {"name": "HTML5/CSS3", "level": 85},
        ],
        backend: [
          {"name": ".NET Core", "level": 85},
          {"name": "C#", "level": 85},
          {"name": ".NET MVC", "level": 70},
          {"name": "SQL (SSMS)", "level": 80},
          {"name": "REST APIs", "level": 80},
        ],
        tools: [
          {"name": "Github", "level": 90},
          {"name": "Docker", "level": 85},
          {"name": "Azure Portal", "level": 70},
          {"name": "Azure DevOps", "level": 80},
          {"name": "Postman", "level": 90},
          {"name": "JWT", "level": 80},
          {"name": "SDLC", "level": 90},
          {"name": "Microservices", "level": 80},
          {"name": "CI/CD", "level": 80}
        ]
      },
      projects: [
        {
          id: 1,
          title: "E-Commerce Dashboard",
          description: "Advanced admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management.",
          image: "/assets/project1.jpg",
          technologies: ["Angular", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
          liveUrl: "https://ecommerce-dashboard.example.com",
          githubUrl: "https://github.com/alexjohnson/ecommerce-dashboard",
          highlights: ["Real-time data visualization", "Responsive design", "Role-based authentication"]
        },
        {
          id: 2,
          title: "Task Management SPA",
          description: "Collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking.",
          image: "/assets/project2.jpg",
          technologies: ["React", "TypeScript", "Express.js", "MongoDB", "Socket.io"],
          liveUrl: "https://taskmanager.example.com",
          githubUrl: "https://github.com/alexjohnson/task-manager",
          highlights: ["Real-time collaboration", "Drag & drop interface", "Advanced filtering"]
        },
        {
          id: 3,
          title: "Weather Analytics Platform",
          description: "Weather data visualization platform with predictive analytics, historical data analysis, and location-based forecasting.",
          image: "/assets/project3.jpg",
          technologies: ["Vue.js", "Python", "Flask", "D3.js", "AWS"],
          liveUrl: "https://weather-analytics.example.com",
          githubUrl: "https://github.com/alexjohnson/weather-platform",
          highlights: ["Machine learning predictions", "Interactive charts", "Global weather data"]
        },
        {
          id: 4,
          title: "Portfolio Website Generator",
          description: "SaaS platform for developers to create professional portfolio websites with customizable themes and deployment options.",
          image: "/assets/project4.jpg",
          technologies: ["Angular", "Node.js", "MongoDB", "Stripe API", "Netlify"],
          liveUrl: "https://portfolio-generator.example.com",
          githubUrl: "https://github.com/alexjohnson/portfolio-generator",
          highlights: ["Dynamic theme system", "One-click deployment", "Payment integration"]
        }
      ],
      experience: [
        {
          company: "Cognizant Technlogy Solutions",
          position: "Associate - Full Stack Developer",
          duration: "August 2024 – Present",
          location: "Chennai, India",
          achievements: [
            "Led end-to-end testing protocols across SDLC phases, reducing post-launch bug reports by 40%, therebyimproving client satisfaction.",
            "Authored clean, efficient, and reusable code, reducing technical debt by 30% through continuous refactoring andcode reviews.",
            "Boosted application performance by 40%, ensuring scalability and robustness for enterprise applications.",
            "Designed and integrated complex Excel-to-API business workflows and dynamic DB queries without third-partylibraries, cutting costs and meeting scaling needs.",
            "Increased developer productivity by 25+ hours/month by simplifying logic flows and cross-team collaborationprocesses.",
            "Delivered zero-defect production releases by taking ownership of high-priority modules."
          ]
        },
        {
          company: "Cognizant Technlogy Solutions",
          position: "Programmer Analyst",
          duration: "March 2023 – August 2024",
          location: "Chennai, India",
          achievements: [
            "Implemented guidelines for server object management, improving system reliability and reducing error logs.",
            "Enhanced system performance across four major sprints, demonstrating consistent delivery in production timelines.",
            "Suggested business alternate flows that reduced third-party dependencies, saving cost and integration efforts.",
            "Delivered accepted POCs on emerging requirements, showcasing adaptability and quick learning",
            "Maintained multiple front-end and back-end modules, ensuring coding standards and performance sustainability."
          ]
        },
        {
          company: "Cognizant Technlogy Solutions",
          position: "Programmer Analyst Trainee",
          duration: "August 2022 – March 2023",
          location: "Chennai, India",
          achievements: [
            "Developed enhancements for an existing Visa Request Application using .NET MVC.",
            "Optimized logical workflows, simplifying business processes and improving system usability.",
            "Delivered low-defect solutions by maintaining industry-best coding practices."
          ]
        }
      ]
    };

    this.currentFilter = 'all';
    this.isLoading = true;
    this.theme = 'light';
    this.animationStates = {
      countersAnimated: false,
      skillBarsAnimated: false,
      timelineAnimated: false,
      typewriterComplete: false,
      heroAnimationStarted: false
    };
    
    this.scrollPosition = 0;
    this.isScrolling = false;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupTheme();
    this.setupLoading();
    this.setupIntersectionObserver();
    this.setupParallax();
    this.renderContent();
    
    // Simulate loading time with enhanced loading screen
    setTimeout(() => {
      this.hideLoading();
      this.startHeroAnimations();
    }, 1500);
  }

  setupEventListeners() {
    // Navigation with smooth scrolling
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    if (navToggle && navMenu) {
      navToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        navMenu.classList.toggle('active');
      });
    }

    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const section = link.getAttribute('data-section');
        this.smoothScrollToSection(section);
        if (navMenu) {
          navMenu.classList.remove('active');
        }
        this.updateActiveNav(link);
      });
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleTheme();
      });
    }

    // Project filters with animations
    const projectFilters = document.querySelectorAll('.projects__filter');
    projectFilters.forEach(filter => {
      filter.addEventListener('click', (e) => {
        e.preventDefault();
        const filterValue = filter.getAttribute('data-filter');
        this.filterProjectsWithAnimation(filterValue);
        this.updateActiveFilter(filter);
      });
    });

    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        this.handleFormSubmit(e);
      });
    }

    // Enhanced scroll events
    let scrollTimer = null;
    window.addEventListener('scroll', () => {
      if (!this.isScrolling) {
        this.isScrolling = true;
      }
      
      this.handleScroll();
      this.updateScrollProgress();
      this.updateParallax();
      
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        this.isScrolling = false;
      }, 100);
    }, { passive: true });

    // Resize events
    window.addEventListener('resize', () => {
      this.handleResize();
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (navMenu && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      this.handleKeyNavigation(e);
    });

    // Mouse parallax for hero section
    if (!this.reducedMotion) {
      document.addEventListener('mousemove', (e) => {
        this.handleMouseParallax(e);
      });
    }
  }

  setupTheme() {
    document.documentElement.setAttribute('data-color-scheme', this.theme);
    this.updateThemeIcon();
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-color-scheme', this.theme);
    this.updateThemeIcon();
    
    // Add transition effect for theme change
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    setTimeout(() => {
      document.body.style.transition = '';
    }, 300);
  }

  updateThemeIcon() {
    const themeIcon = document.getElementById('theme-icon');
    const themeButton = document.getElementById('theme-toggle');
    if (themeIcon && themeButton) {
      themeIcon.className = this.theme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
      themeButton.style.backgroundColor = this.theme === 'light' ? '' : 'grey';
    }
  }

  setupLoading() {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
      loadingElement.classList.remove('hidden');
    }
  }

  hideLoading() {
    const loadingElement = document.getElementById('loading');
    if (loadingElement) {
      loadingElement.classList.add('hidden');
      this.isLoading = false;
    }
  }

  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.triggerElementAnimation(entry.target);
        }
      });
    }, options);

    // Observe all elements with animation attributes
    const animatedElements = document.querySelectorAll('[data-animation]');
    animatedElements.forEach(element => {
      this.observer.observe(element);
    });
  }

  triggerElementAnimation(element) {
    const animationType = element.getAttribute('data-animation');
    const delay = parseInt(element.getAttribute('data-delay')) || 0;

    setTimeout(() => {
      switch (animationType) {
        case 'hero':
          this.animateHeroSection(element);
          break;
        case 'section-reveal':
          this.animateSectionReveal(element);
          break;
        case 'slide-up':
        case 'slide-in-left':
        case 'slide-in-right':
        case 'fade-in':
        case 'scale-in':
          element.classList.add('visible');
          break;
        case 'stagger-fade':
        case 'stagger-up':
          this.animateStaggered(element);
          break;
        case 'timeline':
          this.animateTimeline(element);
          break;
        case 'typewriter':
          // Handled separately in initializeTypewriter
          break;
        default:
          element.classList.add('visible');
      }

      // Special triggers for specific sections
      if (element.id === 'about' && !this.animationStates.countersAnimated) {
        this.animationStates.countersAnimated = true;
        setTimeout(() => this.animateCounters(), 800);
      }
      
      if (element.id === 'skills' && !this.animationStates.skillBarsAnimated) {
        this.animationStates.skillBarsAnimated = true;
        setTimeout(() => this.animateSkillBars(), 600);
      }
    }, delay);
  }

  animateHeroSection(element) {
    if (this.animationStates.heroAnimationStarted) return;
    this.animationStates.heroAnimationStarted = true;
    
    const children = element.querySelectorAll('[data-animation]');
    children.forEach((child, index) => {
      const childDelay = parseInt(child.getAttribute('data-delay')) || 0;
      setTimeout(() => {
        if (child.getAttribute('data-animation') === 'typewriter') {
          this.startTypewriter(child);
        } else {
          child.classList.add('visible');
        }
      }, childDelay);
    });
  }

  animateSectionReveal(element) {
    element.classList.add('visible');
    
    // Animate child elements with staggered timing
    const children = element.querySelectorAll('[data-animation]');
    children.forEach((child, index) => {
      const childDelay = parseInt(child.getAttribute('data-delay')) || (index * 100);
      setTimeout(() => {
        child.classList.add('visible');
      }, childDelay);
    });
  }

  animateStaggered(element) {
    element.classList.add('visible');
    
    const children = element.children;
    Array.from(children).forEach((child, index) => {
      setTimeout(() => {
        child.style.opacity = '1';
        child.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }

  animateTimeline(element) {
    if (this.animationStates.timelineAnimated) return;
    this.animationStates.timelineAnimated = true;
    
    element.classList.add('animate');
    
    const items = element.querySelectorAll('.timeline__item');
    items.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible');
      }, index * 300);
    });
  }

  startTypewriter(element) {
    const text = element.getAttribute('data-text');
    if (text) {
      this.typeWriter(element, text, 80);
    }
  }

  typeWriter(element, text, speed = 100) {
    if (this.reducedMotion) {
      element.textContent = text;
      element.classList.add('complete');
      return;
    }

    let i = 0;
    element.textContent = '';
    element.classList.add('typing');
    element.style.opacity = '1';
    
    const timer = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        element.classList.remove('typing');
        element.classList.add('complete');
        clearInterval(timer);
      }
    }, speed);
  }

  startHeroAnimations() {
    if (this.reducedMotion) {
      // Skip animations for users who prefer reduced motion
      const heroElements = document.querySelectorAll('.hero [data-animation]');
      heroElements.forEach(el => {
        if (el.getAttribute('data-animation') === 'typewriter') {
          el.textContent = el.getAttribute('data-text');
        }
        el.classList.add('visible');
      });
      return;
    }

    // Start hero animations sequence
    setTimeout(() => {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        this.triggerElementAnimation(heroSection);
      }
    }, 300);
  }

  setupParallax() {
    if (this.reducedMotion) return;
    
    this.parallaxElements = document.querySelectorAll('.parallax-element');
  }

  updateParallax() {
    if (this.reducedMotion || !this.parallaxElements) return;
    
    const scrollTop = window.pageYOffset;
    
    this.parallaxElements.forEach(element => {
      const speed = parseFloat(element.getAttribute('data-speed')) || 0.5;
      const yPos = -(scrollTop * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  }

  handleMouseParallax(e) {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    
    const xPos = (clientX / innerWidth - 0.5) * 2;
    const yPos = (clientY / innerHeight - 0.5) * 2;
    
    const shapes = hero.querySelectorAll('.shape');
    shapes.forEach((shape, index) => {
      const speed = 0.5 + (index * 0.2);
      const x = xPos * speed * 20;
      const y = yPos * speed * 20;
      shape.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  updateScrollProgress() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (!scrollProgress) return;
    
    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;
    
    scrollProgress.style.width = `${scrollPercent}%`;
  }

  smoothScrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    const headerHeight = document.querySelector('.header')?.offsetHeight || 60;
    let offsetTop;
    
    // Special handling for home section to scroll to top
    if (sectionId === 'home') {
      offsetTop = 0;
    } else {
      offsetTop = section.offsetTop - headerHeight - 10;
    }
    
    if (this.reducedMotion) {
      window.scrollTo(0, Math.max(0, offsetTop));
      return;
    }
    
    // Custom smooth scroll with easing
    this.smoothScrollTo(Math.max(0, offsetTop), 800);
  }

  smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      
      window.scrollTo(0, start + (distance * ease));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }

  renderContent() {
    this.renderSkills();
    this.renderProjects();
    this.renderExperience();
  }

  renderSkills() {
    const categories = ['frontend', 'backend', 'tools'];
    
    categories.forEach(category => {
      const container = document.getElementById(`${category}-skills`);
      if (container && this.data.skills[category]) {
        container.innerHTML = this.data.skills[category]
          .map(skill => this.createSkillElement(skill))
          .join('');
      }
    });
  }

  createSkillElement(skill) {
    return `
      <div class="skill">
        <div class="skill__header">
          <span class="skill__name">${skill.name}</span>
          <span class="skill__level">${skill.level}%</span>
        </div>
        <div class="skill__bar">
          <div class="skill__progress" data-level="${skill.level}"></div>
        </div>
      </div>
    `;
  }

  renderProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid && this.data.projects) {
      projectsGrid.innerHTML = this.data.projects
        .map(project => this.createProjectElement(project))
        .join('');
        
      // Re-observe project elements for animations
      const projectElements = projectsGrid.querySelectorAll('.project');
      projectElements.forEach(project => {
        this.observer.observe(project);
      });
    }
  }

  createProjectElement(project) {
    const techTags = project.technologies
      .map(tech => `<span class="project__tech">${tech}</span>`)
      .join('');

    return `
      <div class="project" data-technologies='${JSON.stringify(project.technologies)}' data-animation="scale-in">
        <div class="project__image" style="background: var(--color-bg-${(project.id % 8) + 1}); display: flex; align-items: center; justify-content: center; color: var(--color-text-secondary); font-size: var(--font-size-lg); font-weight: var(--font-weight-medium);">
          ${project.title} Preview
        </div>
        <div class="project__content">
          <h3 class="project__title">${project.title}</h3>
          <p class="project__description">${project.description}</p>
          <div class="project__technologies">
            ${techTags}
          </div>
          <div class="project__links">
            <a href="${project.liveUrl}" target="_blank" class="project__link">
              <i class="fas fa-external-link-alt"></i>
              Live Demo
            </a>
            <a href="${project.githubUrl}" target="_blank" class="project__link">
              <i class="fab fa-github"></i>
              Code
            </a>
          </div>
        </div>
      </div>
    `;
  }

  renderExperience() {
    const timeline = document.getElementById('experience-timeline');
    if (timeline && this.data.experience) {
      timeline.innerHTML = this.data.experience
        .map(exp => this.createExperienceElement(exp))
        .join('');
    }
  }

  createExperienceElement(experience) {
    const achievements = experience.achievements
      .map(achievement => `<li class="timeline__achievement">${achievement}</li>`)
      .join('');

    return `
      <div class="timeline__item">
        <div class="timeline__content">
          <div class="timeline__position">${experience.position}</div>
          <div class="timeline__company">${experience.company}</div>
          <div class="timeline__duration">${experience.duration}</div>
          <p class="timeline__description">${experience.description}</p>
          <ul class="timeline__achievements">
            ${achievements}
          </ul>
        </div>
        <div class="timeline__dot"></div>
      </div>
    `;
  }

  updateActiveNav(activeLink) {
    document.querySelectorAll('.nav__link').forEach(link => {
      link.classList.remove('active');
    });
    activeLink.classList.add('active');
  }

  handleScroll() {
    const header = document.querySelector('.header');
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Update active navigation based on scroll position
    this.updateActiveNavOnScroll();
  }

  updateActiveNavOnScroll() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav__link');
    const headerHeight = document.querySelector('.header')?.offsetHeight || 60;

    let currentSection = '';
    
    // Check if we're at the top of the page (home section)
    if (window.scrollY < headerHeight + 100) {
      currentSection = 'home';
    } else {
      sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 50;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === currentSection) {
        link.classList.add('active');
      }
    });
  }

  filterProjectsWithAnimation(filter) {
    this.currentFilter = filter;
    const projects = document.querySelectorAll('.project');

    // First, animate out non-matching projects
    projects.forEach(project => {
      const technologies = JSON.parse(project.getAttribute('data-technologies'));
      const shouldShow = filter === 'all' || technologies.includes(filter);

      if (!shouldShow) {
        project.style.transform = 'scale(0.8) rotateY(90deg)';
        project.style.opacity = '0';
        setTimeout(() => {
          project.style.display = 'none';
        }, 300);
      }
    });

    // Then, animate in matching projects
    setTimeout(() => {
      projects.forEach((project, index) => {
        const technologies = JSON.parse(project.getAttribute('data-technologies'));
        const shouldShow = filter === 'all' || technologies.includes(filter);

        if (shouldShow) {
          project.style.display = 'block';
          setTimeout(() => {
            project.style.transform = 'scale(1) rotateY(0deg)';
            project.style.opacity = '1';
          }, index * 100);
        }
      });
    }, 350);
  }

  updateActiveFilter(activeFilter) {
    document.querySelectorAll('.projects__filter').forEach(filter => {
      filter.classList.remove('active');
    });
    activeFilter.classList.add('active');
  }

  animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'));
      const suffix = counter.getAttribute('data-suffix') || '';
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = Math.floor(current) + suffix;
      }, 16);
    });
  }

  animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill__progress');
    
    skillBars.forEach((bar, index) => {
      const level = parseInt(bar.getAttribute('data-level'));
      
      setTimeout(() => {
        bar.style.width = `${level}%`;
      }, index * 150);
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const submitBtn = document.getElementById('submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoader = submitBtn.querySelector('.btn-loader');
    const messageEl = document.getElementById('form-message');

    // Clear previous errors and messages
    this.clearFormErrors();
    messageEl.classList.add('hidden');

    // Validate form
    const validation = this.validateForm(formData);
    
    if (!validation.isValid) {
      this.showFormErrors(validation.errors);
      return;
    }

    // Show loading state with animation
    submitBtn.disabled = true;
    btnText.textContent = 'Sending...';
    btnLoader.classList.remove('hidden');
    submitBtn.style.transform = 'scale(0.98)';

    // Simulate form submission
    setTimeout(() => {
      // Reset button
      submitBtn.disabled = false;
      btnText.textContent = 'Send Message';
      btnLoader.classList.add('hidden');
      submitBtn.style.transform = 'scale(1)';

      // Show success message with animation
      messageEl.className = 'form-message success';
      messageEl.textContent = 'Thank you for your message! I\'ll get back to you soon.';
      messageEl.classList.remove('hidden');
      messageEl.style.transform = 'translateY(20px)';
      messageEl.style.opacity = '0';
      
      setTimeout(() => {
        messageEl.style.transform = 'translateY(0)';
        messageEl.style.opacity = '1';
      }, 50);

      // Reset form
      form.reset();

      // Hide message after 5 seconds
      setTimeout(() => {
        messageEl.style.transform = 'translateY(-20px)';
        messageEl.style.opacity = '0';
        setTimeout(() => {
          messageEl.classList.add('hidden');
          messageEl.style.transform = 'translateY(0)';
        }, 300);
      }, 5000);
    }, 1500);
  }

  validateForm(formData) {
    const errors = {};
    let isValid = true;

    // Name validation
    const name = formData.get('name')?.trim();
    if (!name || name.length < 2) {
      errors.name = 'Name must be at least 2 characters long';
      isValid = false;
    }

    // Email validation
    const email = formData.get('email')?.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Subject validation
    const subject = formData.get('subject')?.trim();
    if (!subject || subject.length < 5) {
      errors.subject = 'Subject must be at least 5 characters long';
      isValid = false;
    }

    // Message validation
    const message = formData.get('message')?.trim();
    if (!message || message.length < 10) {
      errors.message = 'Message must be at least 10 characters long';
      isValid = false;
    }

    return { isValid, errors };
  }

  clearFormErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(el => {
      el.textContent = '';
    });

    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
      control.style.borderColor = '';
      control.style.transform = '';
    });
  }

  showFormErrors(errors) {
    Object.keys(errors).forEach(fieldName => {
      const errorEl = document.getElementById(`${fieldName}-error`);
      const fieldEl = document.getElementById(fieldName);
      
      if (errorEl && fieldEl) {
        errorEl.textContent = errors[fieldName];
        fieldEl.style.borderColor = 'var(--color-error)';
        fieldEl.style.transform = 'translateX(5px)';
        
        setTimeout(() => {
          fieldEl.style.transform = 'translateX(-5px)';
          setTimeout(() => {
            fieldEl.style.transform = 'translateX(0)';
          }, 100);
        }, 100);
      }
    });
  }

  handleKeyNavigation(e) {
    // Handle escape key for mobile menu
    if (e.key === 'Escape') {
      const navMenu = document.getElementById('nav-menu');
      if (navMenu) {
        navMenu.classList.remove('active');
      }
    }

    // Handle arrow keys for navigation
    if (e.key === 'ArrowDown' && e.ctrlKey) {
      e.preventDefault();
      this.scrollToNextSection();
    } else if (e.key === 'ArrowUp' && e.ctrlKey) {
      e.preventDefault();
      this.scrollToPrevSection();
    }
  }

  scrollToNextSection() {
    const sections = document.querySelectorAll('.section');
    const currentScrollY = window.scrollY;
    const headerHeight = document.querySelector('.header')?.offsetHeight || 60;
    
    for (let i = 0; i < sections.length; i++) {
      const sectionTop = sections[i].offsetTop - headerHeight;
      if (sectionTop > currentScrollY + 50) {
        this.smoothScrollToSection(sections[i].id);
        break;
      }
    }
  }

  scrollToPrevSection() {
    const sections = document.querySelectorAll('.section');
    const currentScrollY = window.scrollY;
    const headerHeight = document.querySelector('.header')?.offsetHeight || 60;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const sectionTop = sections[i].offsetTop - headerHeight;
      if (sectionTop < currentScrollY - 50) {
        this.smoothScrollToSection(sections[i].id);
        break;
      }
    }
  }

  handleResize() {
    // Handle any resize-specific logic here
    if (window.innerWidth > 768) {
      const navMenu = document.getElementById('nav-menu');
      if (navMenu) {
        navMenu.classList.remove('active');
      }
    }

    // Recalculate parallax elements
    if (!this.reducedMotion) {
      this.updateParallax();
    }
  }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});

// Handle page refresh and back/forward navigation
window.addEventListener('beforeunload', () => {
  // Clean up any ongoing processes
});

// Error handling
window.addEventListener('error', (e) => {
  console.error('Application error:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
  console.error('Unhandled promise rejection:', e.reason);
});

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
  });
}