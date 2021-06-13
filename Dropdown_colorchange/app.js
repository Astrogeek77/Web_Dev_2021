const bg = document.querySelector('.bg');
 
 function changeColor(getColor){
    bg.style.background = getColor.value
    bg.style.backgroundSize = '300% 300%'

    let text = getColor.options[getColor.selectedIndex].text
    bg.innerHTML = text
 }