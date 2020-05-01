<script>
  import langStore from './stores/langStore.js'
  import featureStore from './stores/featureStore.js'
  import Spinner from './Spinner.svelte'
  import { onMount } from 'svelte'  
</script>

<div class="feature">
  <div>
    {#if $langStore}
      <span>People are always asking</span>
      <span>What's the secret of being so delicious</span>
    {:else}
      <span>客人總是在詢問</span>
      <span>這麼好吃的秘訣是什麼</span>    
    {/if}
  </div>

  <ul>    
    {#each $featureStore as item}
      <li>         
        <img src={item.image} alt="feature image" />
        {#if $langStore}
          <span>{item.titleEng}</span>
          <p>{item.contentEng}</p>
        {:else}
          <span>{item.titleEng}</span>
          <p>{item.contentChn}</p>
        {/if}      
      </li>
    {/each}   
  </ul>
</div>

<style>
  ul {
    margin: 0;
    padding: 0;
  }
  .feature {
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
    overflow: auto;
    overflow-x: hidden;
  }
  @media (max-width: 414px) {
    .feature {
      padding-top: 10%;
    }
  }
  .feature > div {
    overflow: auto;
    margin-bottom: 30px;
    position: relative;
  }
  .feature > div::before {
    position: absolute;
    content: " ";
    border-bottom: 1px solid #d0d0d0;
    height: 5px;
    width: 14%;
    top: 18px;
    left: 25%;
  }
  @media (max-width: 414px) {
    .feature > div::before {
      display: none;
    }
  }
  .feature > div::after {
    position: absolute;
    content: " ";
    border-bottom: 1px solid #d0d0d0;
    height: 5px;
    width: 14%;
    top: 18px;
    right: 25%;
  }
  @media (max-width: 414px) {
    .feature > div::after {
      display: none;
    }
  }
  .feature span {
    font-size: 20px;
    width: 100%;
    float: left;
    text-align: center;
    margin-bottom: 10px;
  }
  .feature ul {
    width: 90%;
    margin: 20px 5% 0 5%;
  }
  .feature ul li {
    display: inline-block;
    width: 30.33333%;
    float: left;
    text-align: center;
    margin-right: 4.5%;
    font-size: 18px;
  }
  @media (max-width: 414px) {
    .feature ul li {
      width: 90%;
      padding-left: 5%;
      padding-right: 5%;
      margin-bottom: 10%;
    }
  }
  .feature ul li img {
    border-radius: 100px;
    margin-bottom: 20px;
  }
  .feature ul li span {
    margin-bottom: 20px;
    font-size: 18px;
  }
  .feature ul li p {
    font-size: 18px;
  }
  .feature ul li:last-child {
    margin-right: 0;
  }
</style>
