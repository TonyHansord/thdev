const body = document.body;
const main = document.querySelector('main');
const menuLinks = document.querySelectorAll('.menu-link');
const displayMenuBtn = document.querySelector('.toggle');
const menuContent = document.getElementById('nav-modal');
const menuClasses = menuContent.classList;

const fProjectTitle = document.querySelectorAll('.fproject-title');
const fProjectDesc = document.querySelectorAll('.fproject-desc');
const fpTechList = document.querySelectorAll('.fptech-list');
const fRepo = document.querySelectorAll('.frepo');
const fProjectLink = document.querySelectorAll('.flive-site');
const projectType = document.querySelectorAll('.project-type');
const projectTitle = document.querySelectorAll('.project-title');
const projectDesc = document.querySelectorAll('.project-desc');
const techList = document.querySelectorAll('.tech-list');
const projectRepo = document.querySelectorAll('.repo');
const projectLink = document.querySelectorAll('.live-site');

// Data for card objects, will put in a json file further down the track
const projectData = {
  featuredProjects: [
    {
      title: 'SalesPick: Warehouse Management App',
      desc: 'Full-stack Inventory Management app, built with JavaScript and React for the frontend and Ruby on Rails with PostgreSQL, for the backend.',
      tech: ['React', 'Ruby on Rails', 'PostgreSQL'],
      link: 'https://salespick.onrender.com',
    },
    {
      title: 'BookLogue: Reading Manager',
      desc: 'An iOS app that allows users to track their reading progress and add notes about the books they read.',
      tech: ['Swift', 'Xcode', 'Cocoapods', 'Firebase'],
      link: 'https://apps.apple.com/us/app/booklogue/id1521788378?mt=8',
    },
    {
      title: 'Landing Page for Booklogue',
      desc: 'Website for the aforementioned Booklogue App, using Bootstrap and a 3rd party form handler.',
      tech: ['HTML', 'CSS', 'Bootstrap'],
      repo: 'https://github.com/TonyHansord/BookLogueWeb',
      link: 'https://www.booklogue.com',
    },
    {
      title: 'Find that Show',
      desc: 'App front end made with HTML, CSS and JS, as part of software engineering bootcamp. User can search for TV shows, and view details about each show. Fetches data from the TV Maze API.',
      tech: ['HTML', 'CSS', 'Javascript'],
      repo: 'https://github.com/TonyHansord/Phase-1-Project',
      link: 'https://findthatshow.netlify.app',
    },
    {
      title: 'Game collection app',
      desc: 'Proof of concept web app front-end made with React, as part of software engineering bootcamp. User can add games to their collection, and view details about each game.',
      tech: ['HTML', 'CSS', 'React', 'Javascript'],
      repo: 'https://github.com/TonyHansord/phase-2-game-collectors-app',
      link: 'https://game-collect.netlify.app',
    },
  ],
  otherProjects: [
    {
      title: 'NFT preview card component',
      type: 'Frontend Mentor Challenge',
      description:
        'A component that displays a preview of an NFT card that would be used on a NFT Marketplace site.',
      tech: ['HTML', 'CSS', 'Bootstrap'],
      repo: 'https://github.com/TonyHansord/FM-Challenges/tree/master/NFT-element',
      liveSite: 'https://nft-element-tonyhansord.vercel.app',
    },
    {
      title: 'Product preview card component',
      type: 'Frontend Mentor Challenge',
      description:
        'Another challenge involving creating a card component, this one a product preview card.',
      tech: ['HTML', 'CSS'],
      repo: 'https://github.com/TonyHansord/FrontEndMentorChallenges/tree/master/product-preview-card-component',
      liveSite: 'https://product-preview-card-tonyhansord.vercel.app/',
    },
    {
      title: '4 Card Feature Section',
      type: 'Frontend Mentor Challenge',
      description:
        'This challenge was to recreate a four card section, and to practice responsive layouts.',
      tech: ['HTML', 'CSS', 'Figma'],
      repo: 'https://github.com/TonyHansord/FM-Challenges/tree/master/four-card-feature-section',
      liveSite: 'https://four-card-section-tonyhansord.vercel.app',
    },
    {
      title: 'Time tracking dashboard',
      type: 'Frontend Mentor Challenge',
      description:
        'This challenge was to recreate a dashboard for a time-tracking app.',
      tech: ['HTML', 'CSS', 'Javascript'],
      repo: 'https://github.com/TonyHansord/FM-Challenges/tree/time-tracker/time-tracking-dashboard',
      liveSite: 'https://tonyhansord-time-tracker.netlify.app',
    },
    {
      title: 'Skilled e-learning landing page',
      type: 'Frontend Mentor Challenge',
      description:
        'This challenge was to recreate a landing page, with a focus on making it responsive.',
      tech: ['HTML', 'CSS', 'Sass'],
      repo: 'https://github.com/TonyHansord/FrontEndMentorChallenges/tree/master/skilled-elearning-landing-page',
      liveSite: 'https://tonyhansord-elearning-landing-page.netlify.app',
    },
  ],
};

fRepo[0].href = projectData.featuredProjects[2].repo;
fRepo[1].href = projectData.featuredProjects[3].repo;
fRepo[2].href = projectData.featuredProjects[4].repo;

projectData.featuredProjects.forEach((project, index) => {
  fProjectTitle[index].textContent = project.title;
  fProjectDesc[index].textContent = project.desc;
  fProjectLink[index].href = project.link;

  for (let j = 0; j < projectData.featuredProjects[index].tech.length; j++) {
    fpTechList[
      index
    ].innerHTML += `<li>${projectData.featuredProjects[index].tech[j]}</li>`;
  }
});

for (let i = 0; i < projectType.length; i++) {
  projectType[i].textContent = projectData.otherProjects[i].type;
  projectTitle[i].textContent = projectData.otherProjects[i].title;
  projectDesc[i].textContent = projectData.otherProjects[i].description;
  projectRepo[i].href = projectData.otherProjects[i].repo;
  projectLink[i].href = projectData.otherProjects[i].liveSite;
  for (let j = 0; j < projectData.otherProjects[i].tech.length; j++) {
    techList[i].innerHTML += `<li>${projectData.otherProjects[i].tech[j]}</li>`;
  }
}

function openMenu() {
  displayMenuBtn.classList.add('open');
  menuClasses.remove('hidden');
  body.style.overflow = 'hidden';
  main.classList.add('is-blurred');
}

function closeMenu() {
  displayMenuBtn.classList.remove('open');
  menuClasses.add('hidden');
  body.style.overflow = 'auto';
  main.classList.remove('is-blurred');
}

main.addEventListener('click', function () {
  if (!menuClasses.contains('hidden')) {
    closeMenu();
  }
});

menuLinks.forEach((element) => {
  console.log(element);
  element.addEventListener('click', closeMenu);
});

displayMenuBtn.addEventListener('click', function () {
  if (!menuClasses.contains('transition')) {
    menuClasses.add('transition');
  }
  menuClasses.contains('hidden') ? openMenu() : closeMenu();
});

// prevents menu from showing up on viewport resize
window.addEventListener('resize', function () {
  if (menuClasses.contains('transition')) {
    menuClasses.remove('transition');
  }
});
