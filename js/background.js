const images = [
    "img/0.png",
    "img/1.png",
    "img/2.jpg",
    "img/3.jpg",
    "img/4.png",
    "img/5.jpg",
    "img/6.jpg",
    "img/7.jpg",
    "img/8.jpg",
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