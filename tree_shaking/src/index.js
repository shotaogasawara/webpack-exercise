import {
  cube
} from './math.js';
import _ from 'lodash-es'

function component() {
  const element = document.createElement('pre');

  element.innerHTML = [
     'Hello webpack!',
     '5 cubed is equal to ' + cube(5),
    //  '_.isEmpty(null) is equal to ' + _.isEmpty(null),  // この一文の有無でtree-shakingの有無が変わるよ
   ].join('\n\n');

  return element;
}

document.body.appendChild(component());
