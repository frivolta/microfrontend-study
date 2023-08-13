/**
 * Example function from Microfrontend 1.
 * This function demonstrates how functionality can be encapsulated within a microfrontend.
 */
function mf1Function() {
  console.log("Function from Microfrontend 1 executed!");
}

// STATE MANAGEMENT

/**
 * Demonstrates communication from microfrontends to the main app.
 *
 * Creates and dispatches a custom event to allow microfrontends to send data or signals
 * to the main application. The main application can then listen for this event to
 * receive the data or act upon the signal.
 */
const event = new CustomEvent("mf1Event", { detail: { key: "value" } });
window.dispatchEvent(event);

/**
 * Exposes data from Microfrontend 1 to the global scope.
 *
 * By attaching data to the global window object, it becomes accessible
 * to any other script or microfrontend running in the same context.
 */
window.microfrontend1Data = {
  someData: "Hello from Microfrontend 1",
};

/**
 * Provides a standard interface for initializing and cleaning up after Microfrontend 1.
 *
 * - `init`: Injects content specific to Microfrontend 1 into the designated container.
 * - `destroy`: Provides a mechanism to cleanup any resources or bindings, preventing memory leaks or unwanted behavior.
 */
window.microfrontend1 = {
  init: function () {
    document.getElementById("microfrontend-container").innerHTML =
      '<div class="mf1-content">Content from Microfrontend 1</div>';
  },
  destroy: function () {
    // Cleanup code would go here, e.g., removing event listeners, nullifying references, etc.
  },
};

// Invokes the initialization method of Microfrontend 1 immediately after its definition.
window.microfrontend1.init();
