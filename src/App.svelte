<script>
  import Router from "svelte-spa-router";
  import Checkout from "./lib/Checkout.svelte";
  import Home from "./lib/Home.svelte"
  import PreviewPage from "./lib/PreviewPage.svelte";
  
  const routes = {
    "/": Home,
    "/checkout": Checkout,
    "/previewPage": PreviewPage
  }

</script>

<main>
  <!-- <Header {openCart}/> -->
  <Router {routes} useHash={true}/>
</main>
