<script>
  import Navbar from "../components/Navbar.svelte"
  import Hero from "../components/Hero.svelte"
  import Feature from "../components/Feature.svelte"
  import Chef from "../components/Chef.svelte"
  import Avatar from "../components/Avatar.svelte"
  import Map from "../components/Map.svelte"
  import Footer from "../components/Footer.svelte"  
  import { onMount } from "svelte"  
</script>

<style>
  .wrap {
    max-width: 1024px;
    margin: auto;
    font-family: "Microsoft JhengHei";
    color: #3d1101;
    
  }

  .header {
    background-color: #000;
    color: #fff;
    width: 100%;
    position: relative;
  }

  .header .Banner {
    width: 100%;
    height: 420px;
    background-image: url(https://stephenlaichaowen.github.io/my-assets/img/header_desktop.png);
    background-position: center center;
    background-repeat: no-repeat;
  }

  @media (max-width: 600px) {
    .header .Banner {
      background-image: url(https://stephenlaichaowen.github.io/my-assets/img/header_mobile.png);
    }
  }

  .container {
    width: 100%;
    background-color: #efe9e7;
  }
</style>

<div class="wrap">
  <div class="header">
    <div class="Banner">
      <Navbar />     
      <Hero />
    </div>
  </div>
  <div class="container">
    <Feature id="feature" />
    <Chef id="chef" />
    <Avatar />
    <Map id="map" />
  </div>
  <Footer />
</div>
