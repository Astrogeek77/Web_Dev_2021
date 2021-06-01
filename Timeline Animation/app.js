var animation = anime.timeline({
    autoplay: false,

});
  
animation
    .add({
        targets: '#btn',
        top: '1500px',
        duration: 500,
        easing: 'easeInOutSine'
    })

    .add({
        targets: '#stars',
        top: '0px',
        duration: 1000,
        easing: 'easeInOutSine'
    })

    .add({
        targets: '#mountains_behind',
        bottom: '0px',
        duration: 1000,
        easing: 'easeInOutSine'
    })

    .add({
        targets: '#moon',
        top: '0px',
        duration: 1000,
        easing: 'easeInOutBack'
    })

    .add({
        targets: '#mountains_front',
        bottom: '0px',
        duration: 1000,
        easing: 'easeInOutSine'
    })

    .add({
        targets: '#text',
        marginRight: '-80px',
        duration: 1000,
        easing: 'easeInOutBack'
    })

    .add({
        targets: '#btn',
        top: '50%',
        duration: 1000,
        easing: 'easeInOutBack'
    })


document.querySelector('#btn').onclick = animation.play;