const profileMenu = document.querySelector('#dropdown-profile');
const loginBtn = document.querySelector('#login');
const handbugMenu = document.querySelector('#dropdown');
const handbugBtn = document.querySelector('#mobile__menu');


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
    handbugMenu.style.display = 'none';
});

handbugBtn.addEventListener('click', function(event){
    event.stopPropagation();
    profileMenu.style.display = 'none';
});

document.addEventListener('click', () => {
   profileMenu.style.display = (!profileMenu.style.display === 'none') ? 'block':'none'
   handbugMenu.style.display = (!handbugMenu.style.display === 'none') ? 'block':'none'
})
