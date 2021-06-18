const body = document.querySelector('body');
const container = document.querySelector('.container');

const timespanBullet = 8000;
const timespanBlood = 4000;

// add random images to backgroundImage
var bgImages = [
    'url("assets/bg-1.png")',
    'url("assets/bg-2.jpg")',
    'url("assets/bg-3.jpeg")',
    'url("assets/bg-4.jpg")',
    'url("assets/bg-5.jpg")'
];

container.style.backgroundImage = bgImages[Math.floor(Math.random() * bgImages.length)];

// Driver Function
document.addEventListener('click', function(e){

    // add bullet marks on random spots
    let bullet = document.createElement('span')
    bullet.classList.add('bullet')

    let x = e.offsetX;
    let y = e.offsetY;

    bullet.style.left = x + 'px'
    bullet.style.top = y + 'px'

    body.appendChild(bullet);

    // Remove bullets after x seconds
    setTimeout(function(){
        bullet.remove()
    }, timespanBullet) 


    // add bullet sound effect
    let sound = document.getElementById('audio')
    sound.play()


    // add blood effect on click event

    // add random blood image
    const images = [
        'url("assets/blood-1.png")',
        'url("assets/blood-2.png")',
        'url("assets/blood-3.png")',
        'url("assets/blood-4.png")'
    ]

    const blood = document.createElement('span')
    blood.classList.add('blood')

    let imgblood = images[Math.floor(Math.random() * images.length)]
    blood.style.backgroundImage = imgblood

    blood.style.left = Math.random() * innerWidth + 'px'
    blood.style.top = Math.random() * innerHeight + 'px'

    body.appendChild(blood);

    // Remove blood after x seconds
    setTimeout(function(){
        blood.remove()
    }, timespanBlood) 
});

