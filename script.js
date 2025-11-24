const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Remove "a", "an", "the" from beginning
function strip(str) {
  return str.replace(/^(a |an |the )/i, '').trim();
}
const sorted = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

const ul = document.getElementById('band');

sorted.forEach(b => {
  const li = document.createElement('li');
  li.textContent = b;
  ul.appendChild(li);
});
