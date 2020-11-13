/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

const body = document.querySelector('body');
const l1= document.querySelector('#l1');
const l2= document.querySelector('#l2');
const l3= document.querySelector('#l3');
const p1= document.querySelector('#food');
const boxa= document.querySelector('.A');

const l4= document.querySelector('#l4');
const l5= document.querySelector('#l5');
const l6= document.querySelector('#l6');
const list= document.querySelector('#list');
const boxb= document.querySelector('.B');

const l7= document.querySelector('#l7');
const l8= document.querySelector('#l8');
const p2= document.querySelector('#bow');
const listl= document.querySelector('#list-l');
const listr= document.querySelector('#list-r');
const boxc= document.querySelector('.C');

document.addEventListener('scroll', (e) => {
    let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
    console.log(scrolled);

    if(scrolled <= 0.05) l1p = scrolled * 20;
    if(scrolled > 0.05) l1p = 1;
    l1.style.setProperty('--fade', `${100 - l1p*100}%`)

    if(scrolled - 0.05 <0 ) l2p = 0;
    if(scrolled - 0.05 <= 0.05 && scrolled - 0.05 >= 0) l2p = (scrolled - 0.05) * 20;
    if(scrolled - 0.05 > 0.05) l2p = 1;
    l2.style.setProperty('--fade', `${100 - l2p*100}%`)
    
    if(scrolled - 0.1 <0 ) l3p = 0;
    if(scrolled - 0.1 <= 0.05 && scrolled - 0.1 >= 0) l3p = (scrolled - 0.1) * 20;
    if(scrolled - 0.1 > 0.05) l3p = 1;
    l3.style.setProperty('--fade', `${100 - l3p*100}%`)
        
    if(scrolled - 0.05 <0 ) p1p = 0;
    if(scrolled - 0.05 <= 0.05 && scrolled - 0.05 >= 0) p1p = (scrolled - 0.05) * 20;
    if(scrolled - 0.05 > 0.05) p1p = 1;
    p1.style.setProperty('--slide', p1p)

    if(scrolled - 0.2 <0 ) opa = 0;
    if(scrolled - 0.2 <= 0.05 && scrolled - 0.2 >= 0) opa = (scrolled - 0.2) * 20;
    if(scrolled - 0.2 > 0.05) opa = 1;
    boxa.style.setProperty('--opacity', 1-opa)

    if(scrolled - 0.25 <0 ) l4p = 0;
    if(scrolled - 0.25 <= 0.05 && scrolled - 0.25 >= 0) l4p = (scrolled - 0.25) * 20;
    if(scrolled - 0.25 > 0.05) l4p = 1;
    l4.style.setProperty('--fade', `${100 - l4p*100}%`)

    if(scrolled - 0.3 <0 ) l5p = 0;
    if(scrolled - 0.3 <= 0.05 && scrolled - 0.3 >= 0) l5p = (scrolled - 0.3) * 20;
    if(scrolled - 0.3 > 0.05) l5p = 1;
    l5.style.setProperty('--fade', `${100 - l5p*100}%`)
    
    if(scrolled - 0.35 <0 ) l6p = 0;
    if(scrolled - 0.35 <= 0.05 && scrolled - 0.35 >= 0) l6p = (scrolled - 0.35) * 20;
    if(scrolled - 0.35 > 0.05) l6p = 1;
    l6.style.setProperty('--fade', `${100 - l6p*100}%`)

    if(scrolled - 0.325 < -0.075 ) listp = -1;
    if(scrolled - 0.325 <= 0.075 && scrolled - 0.325 >= -0.075) listp = (scrolled - 0.325) * 13.3;
    if(scrolled - 0.325 > 0.075) listp = 1;
    list.style.setProperty('--up', listp)

    if(scrolled - 0.45 <0 ) opb = 0;
    if(scrolled - 0.45 <= 0.05 && scrolled - 0.45 >= 0) opb = (scrolled - 0.45) * 20;
    if(scrolled - 0.45 > 0.05) opb = 1;
    boxb.style.setProperty('--opacity', 1-opb)

    if(scrolled - 0.5 <0 ) l7p = 0;
    if(scrolled - 0.5 <= 0.05 && scrolled - 0.5 >= 0) l7p = (scrolled - 0.5) * 20;
    if(scrolled - 0.5 > 0.05) l7p = 1;
    l7.style.setProperty('--fade', `${100 - l7p*100}%`)

    if(scrolled - 0.55 <0 ) l8p = 0;
    if(scrolled - 0.55 <= 0.05 && scrolled - 0.55 >= 0) l8p = (scrolled - 0.55) * 20;
    if(scrolled - 0.55 > 0.05) l8p = 1;
    l8.style.setProperty('--fade', `${100 - l8p*100}%`)

    if(scrolled - 0.6 <0 ) p2p = 0;
    if(scrolled - 0.6 <= 0.1 && scrolled - 0.6 >= 0) p2p = (scrolled - 0.6) * 10;
    if(scrolled - 0.6 > 0.1) p2p = 1;
    p2.style.setProperty('--up', p2p)

    if(scrolled - 0.65 <0 ) list2p = 0;
    if(scrolled - 0.65 <= 0.05 && scrolled - 0.65 >= 0) list2p = (scrolled - 0.65) * 20;
    if(scrolled - 0.65 > 0.05) list2p = 1;
    listl.style.setProperty('--up', list2p)
    listr.style.setProperty('--up', list2p)

    if(scrolled - 0.75 <0 ) opb = 0;
    if(scrolled - 0.75 <= 0.05 && scrolled - 0.75 >= 0) opb = (scrolled - 0.75) * 20;
    if(scrolled - 0.75 > 0.05) opb = 1;
    boxc.style.setProperty('--opacity', 1-opb)
})