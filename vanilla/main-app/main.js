/**
 * Loads a microfrontend JavaScript module by appending a script tag to the document head.
 *
 * @param {string} url - The URL of the microfrontend JavaScript module.
 */
function loadMicrofrontend(url) {
  const script = document.createElement("script");
  script.src = url;
  document.head.appendChild(script);
  console.log("loadMicrofrontend", url); // Useful for debugging purposes.
}

/**
 * Loads a stylesheet by appending a link tag to the document head.
 *
 * @param {string} url - The URL of the stylesheet.
 */
function loadStyles(url) {
  const link = document.createElement("link");
  link.href = url;
  link.rel = "stylesheet";
  document.head.appendChild(link);
  console.log("loadStyles", url); // Useful for debugging purposes.
}

/**
 * Unloads a previously loaded stylesheet by removing its link tag from the document head.
 *
 * @param {string} url - The URL of the stylesheet to unload.
 */
function unloadStyles(url) {
  const links = document.querySelectorAll(`link[href="${url}"]`);
  links.forEach((link) => link.parentNode.removeChild(link));
  console.log("unloadStyles", url); // Useful for debugging purposes.
}

// Try-Catch block to handle any errors that might occur when loading microfrontends or styles.
try {
  loadMicrofrontend("../microfrontend-1/app.js");
  loadStyles("../microfrontend-1/styles.css");
  loadMicrofrontend("../microfrontend-2/app.js");
  loadStyles("../microfrontend-2/styles.css");
} catch (error) {
  console.error("Error loading microfrontend:", error); // Log any error that occurs during loading.
}

/**
 * Global error handler to capture any unhandled errors that occur during the runtime.
 *
 * @param {string} message - The error message to log.
 */
window.onerror = function (message) {
  console.error("Uncaught error detected:", message);
};

// STATE MANAGEMENT

/**
 * Event listener for handling custom events fired from microfrontend-1.
 *
 * @param {Event} e - The event object containing the event details.
 */
window.addEventListener("mf1Event", (e) => {
  console.log(e.detail, "MF1"); // Outputs the event detail for debugging purposes.
});

/**
 * Event listener for handling custom events fired from microfrontend-2.
 *
 * @param {Event} e - The event object containing the event details.
 */
window.addEventListener("mf2Event", (e) => {
  console.log(e.detail, "MF2"); // Outputs the event detail for debugging purposes.
});

// ROUTING EXAMPLE:
function loadRoute(route) {
  if (route === "/microfrontend-1") {
    loadMicrofrontend("/microfrontend-1/app.js");
    loadStyles("/microfrontend-1/styles.css");
  }
  // Add conditions for other microfrontends as needed
}
