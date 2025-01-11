// Add any dynamic functionality if needed, for example, toggling a mobile menu
console.log("Navbar is loaded and functional.");

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.backgroundColor = window.scrollY > 50 ? '#fff' : '#f4f4f4';
  });