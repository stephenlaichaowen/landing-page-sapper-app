<script>
  import langStore from './stores/langStore.js'
  import { onMount } from 'svelte'

  // let menu = false;
  // function toggleMenu() {
  //   menu = !menu   
  // }

  function switchLanguage() {
    lang = !lang
    langStore.set(lang)
  }  
</script>

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
        {#if $langStore} Features {:else} 特色 {/if}
      </a>
    </li>
    <li>
      <a href="#/" class="ToChief">
        {#if $langStore} Chef {:else} 主廚 {/if}
      </a>
    </li>
    <li>
      <a href="#/" class="ToMap">
        {#if $langStore} Map {:else} 地圖 {/if}
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
 
<style>
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
