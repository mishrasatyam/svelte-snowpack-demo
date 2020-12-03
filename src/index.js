import App from "./App.svelte";

let app = new App({
  target: document.body,
  props:{name:'World'}
});

export default app;