document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('mode').innerHTML = process.env.NODE_ENV;
  document.getElementById('version').innerHTML = process.env.CONTEXT;
})