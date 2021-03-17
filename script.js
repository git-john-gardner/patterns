(function () {
  'use strict';

  const randomChoice = (arr) => {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
  };

  const svgElement = (name, attributes) => {
    const element = document.createElementNS('http://www.w3.org/2000/svg', name);
    Object.entries(attributes).forEach(([attr, value]) => element.setAttribute(attr, value));
    return element;
  };

  function makeColorSwatch(colour) {
    const div = document.createElement('div');
    div.className = 'color';
    div.style.backgroundColor = colour;
    return div;
  }

  let chosenColours = ['antiquewhite', 'darkseagreen', 'cadetblue', 'cornflowerblue'];

  const coloursContainer = document.getElementById('colors');
  chosenColours.forEach(colour => {
    coloursContainer.appendChild(makeColorSwatch(colour));
  });

  const gallery = document.getElementById('gallery');
  const samples = document.getElementById('samples');

  const getRandomSample = () => {
    const randomColours = new Array(10).fill()
      .map(() => randomChoice(chosenColours));

    const root = svgElement('svg', { width: 100, height: 100 });
    randomColours.forEach((colour, idx) => {
      const options = { x: 0, y: 10 * idx, width: 100, height: 10, fill: colour };
      root.appendChild(svgElement('rect', options));
    });
    return root;
  };

  for (let i = 0; i < 12; i++) {
    const sample = getRandomSample();
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'sample');
    newDiv.appendChild(sample);
    newDiv.addEventListener('click', e => {
      if (newDiv.parentElement !== gallery) gallery.appendChild(newDiv);
      else samples.appendChild(newDiv);
    });
    samples.appendChild(newDiv);
  }

}());
