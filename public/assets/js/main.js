/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 400})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

/*skills */
const skills = [
    { name: 'HTML', image: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png', description: 'HyperText Markup Language' },
    { name: 'CSS', image: 'https://cdn-icons-png.flaticon.com/512/732/732190.png', description: 'Cascading Style Sheets' },
    { name: 'JavaScript', image: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png', description: 'Programming language' },
    { name: 'Laravel', image: 'https://laravel.com/img/logotype.min.svg', description: 'PHP framework' },
    { name: 'PHP', image: 'https://www.php.net/images/logos/php-logo.svg', description: 'Programming language' },
    { name: 'Git', image: 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.png', description: 'Version control system' },
    { name: 'Jira', image: 'https://wac-cdn.atlassian.com/dam/jcr:fa01756d-6dcc-45d1-83ab-696fbfeb074f/Jira%20Software%20blue.svg?cdnVersion=hd', description: 'Project management tool' },
    { name: 'Python', image: 'https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png', description: 'Programming language' },
    { name: 'MySQL', image: 'https://www.mysql.com/common/logos/logo-mysql-170x115.png', description: 'Relational database management system' },
    { name: 'MongoDB', image: 'https://www.mongodb.com/assets/images/global/favicon.ico', description: 'NoSQL database management system' },
    { name: 'WordPress', image: './assets/img/WordPress-Logo-700x394.png', description: 'WordPress is a flexible and powerful platform that caters to a wide range of users' }
  ];
  
  const skillsGrid = document.getElementById('skillsGrid');
  const selectedSkillContainer = document.getElementById('selectedSkillContainer');
  
  skills.forEach(skill => {
    const skillCard = document.createElement('div');
    skillCard.classList.add('skill-card');
  
    const skillImage = document.createElement('img');
    skillImage.src = skill.image;
    skillImage.alt = skill.name;
  
    const skillName = document.createElement('h2');
    skillName.textContent = skill.name;
  
    const skillDescription = document.createElement('p');
    skillDescription.textContent = skill.description;
  
    const learnMoreBtn = document.createElement('button');
    
   
  
    skillCard.appendChild(skillImage);
    skillCard.appendChild(skillName);
    skillCard.appendChild(skillDescription);

  
    skillsGrid.appendChild(skillCard);
  });
  /* Expérience*/ 
  const experiences = [
    {
      id: 1,
      date: 'August 2024 – Today',
      location: 'CASABLANCA, MOROCCO',
      company: 'INTERNSHIP IN WEB APPLICATION DEVELOPMENT INVESTM',
      description: 'Development of a website on WordPress for a corporate client.'
    },
    {
      id: 2,
      date: 'April 2024 – May 2024',
      location: 'CASABLANCA, MOROCCO',
      company: 'PFE INTERNSHIP IN WEB APPLICATION DEVELOPMENT DABAIT CONSLLTING',
      description: 'UML analysis of the company website. Development and implementation of the front-end interface of the site.'
    }
  ];
  
  // Initialize with the first experience
  let activeExperience = experiences[0];
  
  const experienceList = document.getElementById('experience-list');
  const expCompany = document.getElementById('exp-company');
  const expDate = document.getElementById('exp-date');
  const expLocation = document.getElementById('exp-location');
  const expDescription = document.getElementById('exp-description');
  
  // Render experience details
  const renderExperienceDetails = (experience) => {
    expCompany.textContent = experience.company;
    expDate.textContent = experience.date;
    expLocation.textContent = experience.location;
    expDescription.textContent = experience.description;
  };
  
  // Render the experience list
  const renderExperienceList = () => {
    experiences.forEach((experience) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = `${experience.company} (${experience.date})`;
      button.onclick = () => {
        activeExperience = experience;
        renderExperienceDetails(experience);
        document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
      };
      
      if (experience.id === activeExperience.id) {
        button.classList.add('active');
      }
  
      li.appendChild(button);
      experienceList.appendChild(li);
    });
  };
  
  // Initial render
  renderExperienceList();
  renderExperienceDetails(activeExperience);
  
  


  function toggleDetails(button) {
    const details = button.nextElementSibling;
    if (details.classList.contains('active')) {
      details.classList.remove('active');
      button.textContent = 'Show Details';
    } else {
      details.classList.add('active');
      button.textContent = 'Hide Details';
    }
  }


  
  