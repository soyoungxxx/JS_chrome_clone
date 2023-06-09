const images = [
    "img/1.png",
    "img/2.png",
    "img/4.png",
    "img/5.jpg",
    "img/6.png",
    "img/7.png",
    "img/8.png"
];

const IMG_NUMBER = images.length;

const getNumber = () => {
    return Math.floor(Math.random() * IMG_NUMBER);
}

const paintImage = (imgNumber) => {
    const backgroundimage = "url('" + images[imgNumber] + "')"
    document.body.style.backgroundImage = backgroundimage;
}

paintImage(getNumber());