
let scrollnav = document.querySelector('.header__nav');


window.addEventListener('scroll', function el() {

       scrollnav.style.background = '#C4E538';
       
       if (window.scrollY == '0') {
              scrollnav.style.background = ' rgba(255, 245, 245, 1)';
       }
       
})



let layer = document.querySelector('.layer')

let header = document.querySelector('.header')


header.addEventListener('mousemove', (e) => {


       const dataSpeed = layer.getAttribute('data-speed');

       const x = (window.innerWidth - e.pageX * dataSpeed) / 100;
       const y = (window.innerHeight - e.pageY * dataSpeed) / 100;

       layer.style.transform = `translate(${x}px, ${y}px)`;
})


let burgerBtn = document.querySelector('.burger__menu');


let menu = document.querySelector('.nav__menu-burger');



let closeBtn = document.querySelector('.nav__menu-burger');




burgerBtn.addEventListener('click', () => {
       menu.classList.add('active__btn')
})

closeBtn.addEventListener('click', () => {
       menu.classList.remove('active__btn')
})





let runner = document.querySelector('.runner__num');

let x = 0


function run() {
       x++

       let untill = runner.getAttribute('data-num')

       const z = runner.innerHTML = `${x}%`




       let time = setTimeout(() => {
              run()
       }, 50);

       if (z == untill) {
              clearTimeout(time)
       }

}

let linerRunner = document.querySelector('.graph__runner-line');
let dataLine = linerRunner.getAttribute('data-line');
let y = 0

function runs() {
       y++


       let w = linerRunner.style.width = `${y}%`;


       let times = setTimeout(() => {
              runs()
       }, 50);

       if (w == dataLine) {
              clearTimeout(times)
       }

}



let runner1 = document.querySelector('.runner__num-2');
let x1 = 0
function run1() {
       x1++

       let untill1 = runner1.getAttribute('data-num')

       const z1 = runner1.innerHTML = `${x1}%`




       let time1 = setTimeout(() => {
              run1()
       }, 50);

       if (z1 === untill1) {
              clearTimeout(time1)
       }

}
let linerRunner1 = document.querySelector('.graph__runner-line-2');
let dataLine1 = linerRunner1.getAttribute('data-line');
let y1 = 0

function runs1() {
       y1++


       let w1 = linerRunner1.style.width = `${y1}%`;


       let times1 = setTimeout(() => {
              runs1()
       }, 50);

       if (w1 === dataLine1) {
              clearTimeout(times1)
       }

}





let runner2 = document.querySelector('.runner__num-3');
let x2 = 0
function run2() {
       x2++

       let untill2 = runner2.getAttribute('data-num')

       const z2 = runner2.innerHTML = `${x2}%`




       let time2 = setTimeout(() => {
              run2()
       }, 50);

       if (z2 === untill2) {
              clearTimeout(time2)
       }

}

let linerRunner2 = document.querySelector('.graph__runner-line-3');
let dataLine2 = linerRunner2.getAttribute('data-line');
let y2 = 0

function runs2() {
       y2++


       let w2 = linerRunner2.style.width = `${y2}%`;


       let times2 = setTimeout(() => {
              runs2()
       }, 50);

       if (w2 == dataLine2) {
              clearTimeout(times2)
       }

}




let runner3 = document.querySelector('.runner__num-4');

let untill3 = runner3.getAttribute('data-num')
let x3 = 0


function run3() {
       x3++


       const z3 = runner3.innerHTML = `${x3}%`




       let time3 = setTimeout(() => {
              run3()
       }, 50);

       if (z3 === untill3) {
              clearTimeout(time3)
       }

}

let linerRunner3 = document.querySelector('.graph__runner-line-4');
let dataLine3 = linerRunner3.getAttribute('data-line');
let y3 = 0

function runs3() {
       y3++


       let w3 = linerRunner3.style.width = `${y3}%`;


       let times3 = setTimeout(() => {
              runs3()
       }, 50);

       if (w3 == dataLine3) {
              clearTimeout(times3)
       }

}


let runPercent = document.querySelector('#run__percent')


// console.log(run__percent.getBoundingClientRect().top);

window.addEventListener('scroll', function onScroll() {

       const elem = document.elementFromPoint(0, -40);


       run()
       runs()
       run1()
       runs1()
       run2()
       runs2()
       run3()
       runs3()


       window.removeEventListener('scroll', onScroll)
})




let yearlyBtn = document.querySelectorAll('.yearly__btn')


let tabsContentItem = document.querySelectorAll('.tabs__contentItem')






//        yearlyBtn[i].classList.add('btn-active')
for (let i = 0; i < yearlyBtn.length; i++) {

       yearlyBtn[i].addEventListener('click', function () {

              for (let k = 0; k < yearlyBtn.length; k++) {


                     yearlyBtn[k].classList.remove('btn-active')
                     tabsContentItem[k].classList.remove('active')
              }
              yearlyBtn[i].classList.add('btn-active')
              tabsContentItem[i].classList.add('active')
       })

}


let hoverGradient = document.querySelectorAll('.tabs__content-box')

let tabsContentDesc = document.querySelectorAll('.tabs__content-desc')

let priceTitle = document.querySelectorAll('.tabs__price-title')
let priceTxt = document.querySelectorAll('.tabs__price-txt ')
let priceSpan = document.querySelectorAll('.price__span')
let titleBasic = document.querySelectorAll('.title__basic')
let titleBasicImg = document.querySelectorAll('.title__basic-img ')
let titleBasicTxt = document.querySelectorAll('.title__basic-text ')
let basicTitle = document.querySelectorAll('.title__basic ')



for (let z = 0; z < hoverGradient.length; z++) {

       gradientBox =   hoverGradient[z]

       hoverGradient[z].addEventListener('mouseover', function() {
              
              setTimeout(() => {
                     titleBasic[z].style.background = `linear-gradient(180deg, #D95374 0%, #D32852 100%)` 
                     titleBasicImg[z].style.opacity = `1` 
                     titleBasicTxt[z].style.opacity = `1` 
                     hoverGradient[z].style.background = `linear-gradient(180deg, #D9315A 0%, #F3678A 100%)` 
                     basicTitle[z].style.color = 'white'
                     priceTxt[z].style.color = '#fff'
                     priceTitle[z].style.color = '#fff'
                     priceSpan[z].style.color = '#fff'
              }, 10);      
              
       })
       
       hoverGradient[z].addEventListener('mouseout', function() {
              setTimeout(() => {
                     titleBasic[z].style.background = `#fff` 
                     titleBasicImg[z].style.opacity = `0` 
                     titleBasicTxt[z].style.opacity = `0` 
                     hoverGradient[z].style.background = `#fff` 
                     basicTitle[z].style.color = '#050C26'
                     priceTitle[z].style.color = '#050C26'
                     priceSpan[z].style.color = '#050C26'
                     priceTxt[z].style.color = '#575859'
              }, 10);
              
              
       })
}





// for (let t = 0; t < hoverGradient.length; t++) {

//               // console.log(priceText[c]);
              
//        tabsContentDesc[t].addEventListener('mouseover', function() {
              
//               setTimeout(() => {
//                      priceTxt[t].style.color = '#fff'
//                      priceTitle[t].style.color = '#fff'
//                      priceSpan[t].style.color = '#fff'
//               }, 200);      
              
//        })
//        tabsContentDesc[t].addEventListener('mouseout', function() {
//               setTimeout(() => {
//                      priceTxt[t].style.color = '#575859'
//                      priceTitle[t].style.color = '#050C26'
//                      priceSpan[t].style.color = '#050C26'
//               }, 200);
              
              
//        })
// }






let buttonsSpan = document.querySelectorAll('.buttons__span');



for (let m = 0; m < buttonsSpan.length; m++) {

       buttonsSpan[m].addEventListener('click', function () {
              
              for (let j = 0; j < buttonsSpan.length; j++) {
                     buttonsSpan[j].classList.remove('active__span')
                     
              }
              buttonsSpan[m].classList.add('active__span')
       })
       
}