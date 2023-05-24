
// Observer for scroll animation on y-axis
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)

    if(entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }

  })
})


const hiddennElements = document.querySelectorAll('.hiddenn');
hiddennElements.forEach((el) => observer.observe(el));

// Collapse navbar on click

function collapseNavbar() {
  var navbarCollapse = document.getElementById('navbarNavAltMarkup');
  var bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
  bsCollapse.hide();
}