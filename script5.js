"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// console.dir(box);
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
//const text = document.createTextNode('тут был я');
div.classList.add('black');
// document.querySelector('.wrapper').append(div);
// document.body.append(div);
wrapper.append(div);
// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.innerHTML = '<h1>Hello,  sdgadsfg sdfagfadsg adfgadsfgfworld</h1>';
// div.textContent = "Hwllo";
div.insertAdjacentHTML("beforebegin", '<h2>fegdfgsdfbg</h2>');