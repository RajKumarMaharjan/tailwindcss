const profileMenu = document.querySelector('#profile-menu');
const loginBtn = document.querySelector('#login');
const hamburgerMenu = document.querySelector('#dropdown-menu');
const hamburgerBtn = document.querySelector('#mobile__menu');


// loginBtn.addEventListener('click', () => {
//     if(profileMenu.style.display === 'block'){
//         profileMenu.style.display = 'none'
//     }else{
//         profileMenu.style.display = 'block'
//     }
   
// })

function toggleBtn(element){
    element.style.display = (element.style.display === 'none') ? 'block' : 'none';
};

loginBtn.addEventListener('click', function(event){
    event.stopPropagation();
    hamburgerMenu.style.display = 'none';
});

hamburgerBtn.addEventListener('click', function(event){
    event.stopPropagation();
    profileMenu.style.display = 'none';
});

document.addEventListener('click', () => {
   profileMenu.style.display = (!profileMenu.style.display === 'none') ? 'block':'none'
   hamburgerMenu.style.display = (!hamburgerMenu.style.display === 'none') ? 'block':'none'
})
