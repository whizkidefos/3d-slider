let x = 0, bool = false, interval;

const rotate = () => {
    const cubes = document.querySelectorAll('.cube');

    Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
}

const changePlayPauseIcon = () => {
    const i = document.querySelector('.play-pause i');
    const iClass = i.classList[1];
    if (iClass === 'fa-play') {
        i.classList.remove('fa-play');
        i.classList.add('fa-pause');
    } else {
        i.classList.remove('fa-pause');
        i.classList.add('fa-play');
    }
}

const playPause = () => {
    if(!bool) {
        interval = setInterval(() => {
            x -= 90;
            rotate();
        }, 2000);
        changePlayPauseIcon();
        bool = true;
    } else {
        clearInterval(interval);
        changePlayPauseIcon();
        bool = false;
    }
}

// click event
document.querySelector('.left-arrow').addEventListener('click', () => {
    x += 90;
    rotate();
    if(bool) {
        playPause();
    }
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    x -= 90;
    rotate();
    if(bool) {
        playPause();
    }
});

// hover event
document.querySelector('.left-arrow').addEventListener('mouseover', () => {
    x += 25;
    rotate();
});
document.querySelector('.left-arrow').addEventListener('mouseout', () => {
    x -= 25;
    rotate();
});

document.querySelector('.right-arrow').addEventListener('mouseover', () => {
    x -= 25;
    rotate();
});
document.querySelector('.right-arrow').addEventListener('mouseout', () => {
    x += 25;
    rotate();
});

// play - pause event
document.querySelector('.play-pause').addEventListener('click', () => {
    playPause();
});