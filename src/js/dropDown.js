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
});

handbugBtn.addEventListener('click', function(event){
    event.stopPropagation();
});

