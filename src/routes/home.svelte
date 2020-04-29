<script>
  import avatarStore from '../components/stores/avatarStore.js'
  import langStore from '../components/stores/langStore.js'
  import featureStore from '../components/stores/featureStore.js'
  import { onMount } from "svelte" 

   // let menu = false;
  let lang = true

  // function toggleMenu() {
  //   menu = !menu   
  // }

  function switchLanguage() {
    lang = !lang
    langStore.set(lang)
  }

  onMount(() => {
    langStore.subscribe(value => {
      lang = value
    })
  })
</script>

<div class="wrap">
  <div class="header">
    <div class="Banner">
      <div class="top">
        <h1>
          <img
            width="150"
            height="60"
            class="logo"
            src="https://i.ya-webdesign.com/images/burger-logo-png-4.png"
            alt="MacBurger" />
        </h1>

        <ul class="nav">
          <li>
            <a href="#section" class="ToFeature">
              {#if lang}
                Features
              {:else}
                特色
              {/if}
            </a>
          </li>
          <li>
            <a href="#/" class="ToChief">
              {#if lang}
                Chef
              {:else}
                主廚
              {/if}
            </a>
          </li>
          <li>
            <a href="#/" class="ToMap">
              {#if lang}
                Map
              {:else}
                地圖
              {/if}
            </a>
          </li>
          <li>
            <a href="#/" class="ToMap" on:click|preventDefault={switchLanguage} style="display: flex; align-items: end">        
              <i class="fas fa-globe"></i>
            </a>
          </li>
        </ul>
        <a on:click|preventDefault={toggleMenu} class="showmenu" href="#/">
          <i class="fa fa-bars" aria-hidden="true" />    
        </a>
      </div>   
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

   ul {
    margin: 0;
    padding: 0;
  }
  .top {
    height: 56px;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 20;
  }

  .nav {
    float: right;
    padding-top: 18px;
  }

  @media (max-width: 575px) {
    .nav {
      display: none;
      overflow: hidden;
      transition: max-height 0.5s;
      height: auto;
      z-index: 110;
    }
  }

  .nav li {
    display: inline-block;
    font-size: 18px;
    margin-right: 50px;
  }

  @media (max-width: 575px) {
    .nav li {
      margin-right: 10px;
    }
  }

  .nav li a {
    text-decoration: none;
    color: #fff;
  }

  .showmenu {
    display: none;
    font-size: 30px;
  }

  @media (max-width: 575px) {
    .showmenu {
      display: block;
      position: absolute;
      top: 10px;
      right: 15px;
      color: #fff;
    }
  }

  .logo {
    float: left;
    margin-left: 42px;
    padding-top: 10px;
  }
  
  /* .menuShow {
		display: block;
	} */
  
  @media (max-width: 575px) {
    /* .menuShow .nav {
      max-height: 500px; 
    }  */
  }
</style>


