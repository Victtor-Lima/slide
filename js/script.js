import Slide from './slide.js';

const slide = new Slide('.slide', '.wrapper');
slide.init();

slide.changeSlide(3)
slide.activePrevSlide()
// console.log(slide)