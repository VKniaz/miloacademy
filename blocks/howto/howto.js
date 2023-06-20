import { getLibs } from '../../scripts/utils.js';

export default async function init(el) {
  const { createTag } = await import(`${getLibs()}/utils/utils.js`);
  console.log(el);
  const divs = el.querySelectorAll('div');
  const container = divs[0];
  container.classList.add('container');
  const pictureElement = document.querySelector('.howto picture');
  const divElement = document.createElement('div');
  divElement.classList.add('image');
  pictureElement.parentNode.append(divElement, pictureElement);
  console.log(pictureElement);

}





