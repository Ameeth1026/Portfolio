const navbar = document.querySelector('#navbar ul');
const openMenu = document.querySelector('.fa-bars');
const closeMenu = document.querySelector('#navbar ul span i');
const heroText = document.querySelector('.content h1');
const Sub_text = document.querySelector('.sub_text');
const img_zomm = document.querySelector('#profile_pic')

/* MOBILE NAV */
openMenu?.addEventListener('click', () => {
  navbar.classList.add('swipe');
});

closeMenu?.addEventListener('click', () => {
  navbar.classList.remove('swipe');
});

/* HERO TEXT SCALE ON SCROLL */
window.addEventListener('scroll', () => {
  const scaleValue = 1 + window.scrollY / 800;
  const scaleValue2 = 1 + window.scrollY / 700;

  heroText.style.transform = `scale(${scaleValue})`;
  Sub_text.style.transform = `scale(${scaleValue2})`;
  img_zomm.style.transform= `scale(${scaleValue})`;

});


const menuItems = document.querySelectorAll(".project-menu li");
const projects = document.querySelectorAll(".project-box");
const projectGrid = document.getElementById("projectGrid");

menuItems.forEach(item => {
  item.addEventListener("click", () => {

    // ACTIVE MENU
    menuItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    const category = item.dataset.category;

    // FILTER PROJECTS
    projects.forEach(project => {
      if(category === "all" || project.dataset.category === category) {
        project.classList.remove("hide");
      } else {
        project.classList.add("hide");
      }
    });

    // SWITCH GRID LAYOUT
    if(category === "all") {
      projectGrid.classList.remove("dynamic"); // keep original big rectangle layout
    } else {
      projectGrid.classList.add("dynamic"); // reorder dynamically
    }

  });
});