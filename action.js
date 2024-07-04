const texts = ["Front-end Developer.", "UI/UX Designer.", "Graphic Designer."];
let currentIndex = 0;
const dynamicText = document.getElementById("constant-text");

function typeText(text, callback) {
    let i = 0;
    dynamicText.innerText = ''; 
    function type() {
        if (i < text.length) {
            dynamicText.innerText += text.charAt(i);
            i++;
            setTimeout(type, 100); 
        } else if (callback) {
            setTimeout(callback, 1000); 
        }
    }
    type();
}

function deleteText(callback) {
    let text = dynamicText.innerText;
    function del() {
        if (text.length > 0) {
            text = text.substring(0, text.length - 1);
            dynamicText.innerText = text;
            setTimeout(del, 100); 
        } else if (callback) {
            setTimeout(callback, 500);
        }
    }
    del();
}

function startTypingEffect() {
    typeText(texts[currentIndex], () => {
        setTimeout(() => {
            deleteText(() => {
                currentIndex = (currentIndex + 1) % texts.length;
                startTypingEffect();
            });
        }, 1500); 
    });
}

startTypingEffect();


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active')
            })
        }

    });
}
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
