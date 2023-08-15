import { useEffect } from "react";
import ReactDOM from "react-dom";

function AboutLoader() {
  useEffect(() => {
    System.import("about-microfrontend").catch((err: any) => {
      console.error("Error loading microfrontend:", err);
    });
    // Cleanup function
    return () => {
      const container = document.getElementById("fe-about-microfrontend");
      if (container) {
        ReactDOM.unmountComponentAtNode(container);
        System.delete(System.resolve("about-microfrontend"));
      }
    };
  }, []);

  return null;
}

export default AboutLoader;
