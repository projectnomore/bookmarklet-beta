javascript:(function() {
  var rawUrl = 'https://raw.githubusercontent.com/projectnomore/bookmarklet-beta/main/bookmarklet.js'; // fetch URL
  
    .then(response => response.text())
    .then(code => {
      var script = document.createElement('script');
      script.textContent = code;
      document.body.appendChild(script);
    })
    .catch(error => {
      console.error('Error fetching and executing the code:', error);
    });
})();
