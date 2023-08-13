// Example of exporting a function (if needed)
function mf1Function() {
  console.log("Function from Microfrontend 2 executed!");
}

// STATE MANAGEMENT
// This custom event is an example of how microfrontends can communicate with the main app.
const event2 = new CustomEvent("mf2Event", { detail: { key: "value" } });
window.dispatchEvent(event2);

// Expose some data to the global scope for the main app to access.
window.microfrontend1Data = {
  someData: "Hello from Microfrontend 2",
};

// Provide initialization and cleanup methods for each microfrontend.
window.microfrontend2 = {
  init: function () {
    document.getElementById("microfrontend2-container").innerHTML =
      '<div class="mf2-content">Content from Microfrontend 2</div>';
  },
  destroy: function () {
    // Cleanup code here
  },
};

window.microfrontend2.init();
