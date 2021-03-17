export const randomChoice = (arr) => {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
};

export const svgElement = (name, attributes) => {
  const element = document.createElementNS('http://www.w3.org/2000/svg', name);
  Object.entries(attributes).forEach(([attr, value]) => element.setAttribute(attr, value));
  return element;
};

export function makeColorSwatch(colour) {
  const div = document.createElement('div');
  div.className = 'color';
  div.style.backgroundColor = colour;
  return div;
}
