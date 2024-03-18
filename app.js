const noCookie = document.getElementById('noCookie');
const btnCont = document.getElementById('btnCont');

let flexDirection = 'row'; 

noCookie.addEventListener('mouseover', function() {
   
    flexDirection = (flexDirection === 'row') ? 'row-reverse' : 'row';
    btnCont.style.flexDirection = flexDirection;
});
