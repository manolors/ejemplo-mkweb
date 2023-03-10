document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('mode').innerHTML = process.env.NODE_ENV;
  document.getElementById('version').innerHTML = import.meta.env.MY_APP_VERSION;

})