function playSong(event) {
    const jukebox = event.target.querySelector('audio')
    if (jukebox.paused) {
        resetOthers(event.target)
        jukebox.play()
        event.target.classList.add('flex')

    } else {
        jukebox.pause();
        event.target.classList.remove('flex')
    }
}

function resetOthers(active) {
    for (let article of document.querySelectorAll('#songs > article')) {
        if (active != article) {
            // css
            article.classList.remove('flex')
            // audio
            const track = article.querySelector('audio')
            // console.log('reset', track.src)
            track.currentTime = 0;
            track.pause()
        }
    }
}

for (let track of document.querySelectorAll('#songs > article')) {
    track.addEventListener('click', playSong);
}

function fotoSlider(images, target, btnLeft, btnRight) {
    let index = 0;
    const size = images.length;

    // de i wordt gedifineert wanneer deze functie wordt aangeroepen.
    function updateProductImage(i) {
        document.querySelector(target).src = "images/" + images[Math.abs(i) % size];
    }

    document.querySelector(btnLeft).addEventListener("click", () => {
        updateProductImage(--index);
    });
    document.querySelector(btnRight).addEventListener("click", () => {
        updateProductImage(++index);
    });
}

fotoSlider(
    [
        "showcase1.jpg",
        "showcase2.jpg",
        "showcase3.jpg"
    ],
    ".carousel img",
    ".carousel .left-btn",
    ".carousel .right-btn"
);

const gridArticles = document.querySelectorAll("#grid > article")
const grid = document.querySelector("#grid")

const options = {
    root: null,
    threshold: .2,
    rootMargin: "0px 0px -400px 0px"
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            gridArticles.forEach(article => {
                entry.target.style.overflowY = "hidden"
            })
            console.log('out of position')
        }
        else {
            gridArticles.forEach(article => {
                entry.target.style.overflowY = "scroll"
            })
        }
    });
}, options);

gridArticles.forEach(article => {
    observer.observe(article);
})

const fadeOptions = {
    root: null,
    threshold: 0.25,
    rootMargin: "100px"
};

const fading = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entries.forEach(entry => {
                entry.target.style.transition = "2s"
                entry.target.style.opacity = "0.3"
                console.log(entry.target)
            })
        }
        else {
            entries.forEach(entry => {
                entry.target.style.transition = "1s"
                entry.target.style.opacity = "1"
                console.log(entry.target)
            })
        }
    });
}, fadeOptions);

gridArticles.forEach(article => {
    fading.observe(article);
})

// if (window.pageYOffset >= 300 || window.pageYOffset <= 2000) {
//     body.classList.add("hide")
// }






// const showcase = document.querySelector('#showcase');
// const cursor = document.querySelector('.cursor');

// showcase.addEventListener('mousemove', e => {

//     const customs = getComputedStyle(cursor);
//     const size = parseInt(customs.getPropertyValue('--size'))

//     console.log(size)

//     cursor.style.left = (e.pageX - size / 2) + 'px';
//     cursor.style.top = (e.pageY - size / 2) + 'px';
// })
