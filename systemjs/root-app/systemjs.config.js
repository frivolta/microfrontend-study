SystemJS.config({
  baseURL: "/about",
  map: {
    "about-microfrontend": "http://localhost:9001/aboutMicrofrontend.bundle.js",
  },
  packages: {
    ".": {
      defaultExtension: "js",
    },
  },
});
