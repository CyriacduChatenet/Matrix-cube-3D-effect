const topPart = document.querySelector('.top');
const rightPart = document.querySelector('.right');
const frontPart = document.querySelector('.front');
const bottomPart = document.querySelector('.bottom');
const leftPart = document.querySelector('.left');
const cube = document.querySelector('.cube');

const buttonAssemble = document.querySelector('#btn');

const AssembleCubeAnimation = () => {
    frontPart.style.animation = "FrontPart 5s linear";
    leftPart.style.animation = "LeftPart 5s linear";
    rightPart.style.animation = "RightPart 5s linear";
    bottomPart.style.animation = "BottomPart 5s linear";
    topPart.style.animation = "TopPart 5s linear";
};

const AssembleCube = () => {
    frontPart.style.transform = 'translateX(150px) translateY(75px) translateZ(-75px) rotateX(90deg)'
    rightPart.style.transform = 'translateX(225px) translateY(150px) translateZ(-75px) rotateY(90deg)'
    topPart.style.transform = 'translateX(150px) translateY(150px) translateZ(-150px)'
    leftPart.style.transform = 'translateX(75px) translateY(150px) translateZ(-75px) rotateY(-90deg)'
    bottomPart.style.transform = 'translateX(150px) translateY(225px) translateZ(-75px) rotateX(-90deg)'
};


buttonAssemble.addEventListener('click',() => {
    AssembleCubeAnimation()
    setTimeout(() => {
        AssembleCube()
        cube.style.animation="spin 5s linear infinite"
    }, 5000);
})