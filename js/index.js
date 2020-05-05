// prevent default of anchor tags

// save the navLinks in a variable
const navLinks = document.querySelectorAll('.nav-link')
// create preventDefault script
const preventD = (e) => e.preventDefault(); 
// use forEach to add event listener to navLinks
navLinks.forEach(link => link.addEventListener('click', preventD))




// on click -- change first nav link text
const firstLink = document.querySelector('.nav-link');
const changeLinkTxt = () => firstLink.textContent = 'Changed!'
firstLink.addEventListener('click', changeLinkTxt);

// on mouseover -- change header background 
const header = document.querySelector('header')
const changeBC = () => header.style.backgroundColor = 'red';
header.addEventListener('mouseover', changeBC);

// on mouseout -- change header background back 
const revertBC = () => (header.style.backgroundColor = 'white');
header.addEventListener('mouseout', revertBC);

// 




