// const dropdown = document.getElementById('dropdown')
// function toggleDropdown(){
//     dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";

// };

// function closeDropdown(){
//     dropdown.style.display = "none"
// };


const menuItem = document.querySelector('#dropdown')
const menuButton = document.querySelector('#mobile__menu')

menuButton.addEventListener('click', () => {
    menuItem.classList.toggle('hide')
})

document.addEventListener('click', e => {
    if(!menuItem.contains(e.target) && e.target !== menuItem){
        menuItem.classList.add('hide')
    }
})