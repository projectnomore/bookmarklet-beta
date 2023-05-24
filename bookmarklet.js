javascript:(function() {
  // Create a container div for the UI
  var container = document.createElement('div');
  container.setAttribute('id', 'container');
  container.innerHTML = `
    <p id="message">Press Shift + ] to close or open</p>
    <h1>Made By ProjectNoMore</h1>
    <hr>
    <h2>Edpuzzle by <a href="https://www.librecheats.net/">LibreCheats</a></hr>
    <a href="https://ujosd1.csb.app/hacks/edpuzzle.html">View on PNM Site</a>
    <button href="javascript: document.dev_env = "https://edpuzzle-beta.hs.vc"; fetch("https://edpuzzle-beta.hs.vc/script.js").then(r => r.text()).then(r => eval(r))">Inject</button>
    
  `;

  // Append the container to the document body
  document.body.appendChild(container);

  // Toggle the visibility of the container
  function toggleContainerVisibility() {
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
  }

  // Listen for the Shift + ] key press event
  document.addEventListener('keydown', function(event) {
    if (event.shiftKey && event.key === '}') {
      toggleContainerVisibility();
    }
  });
})();
// PLEASE BE AWARE OF THE FOLLOWING NOTICE:
/*              NOTICE                  */
/*   PNM EXECUTER (c) 2023 PNM.         */
/*              NOTICE                  */
