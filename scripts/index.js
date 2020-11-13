/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

const body = document.querySelector('body');
const l1= document.querySelector('#l1');
const l2= document.querySelector('#l2');
const l3= document.querySelector('#l3');
const p1= document.querySelector('#food');

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
    l1.style.setProperty('--opacity', 1-opa)
    l2.style.setProperty('--opacity', 1-opa)
    l3.style.setProperty('--opacity', 1-opa)
    p1.style.setProperty('--opacity', 1-opa)
})