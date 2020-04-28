<script>
  import langStore from './stores/langStore.js'
  import { onMount } from 'svelte'

  let lang 
  
  onMount(() => {
    langStore.subscribe(value => {
      lang = value
    })
  })
</script>

<div class="chief">
  <div
    class="chief-img"
    style="background-image:
    url(https://stephenlaichaowen.github.io/my-assets/img/main_chef_brown.png);" />
  <div class="chief-today">    
    <span style="margin-bottom:0.51rem" class="chief-name">
      {#if lang}
        Today Chief
      {:else}
        今日主廚
      {/if}
      <span>:</span>
      {#if lang}
        Plum in Shock
      {:else}
        金森、梅在帕
      {/if}
    </span>
    <p>
      {#if lang}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident culpa
        atque eos ullam. At molestias ea rem, repudiandae omnis, delectus eaque
        asperiores sequi quaerat debitis obcaecati fugit nisi numquam quod ullam
        fuga dolorem inventore veniam cupiditate voluptatibus consectetur
        temporibus id voluptatum. Hic accusantium delectus, perspiciatis assumenda
        dignissimos incidunt ab alias!
      {:else}
        師一早有是成示。意代代不不好話中時，人質生，場冷間和名開一充月強越西、源關那數間手日認出治但持下認快天體公，通風快進；以的關金條加前義數月整子回線張取減何生；古老直型，件可我子性居識動上演下就石這……強從進的布行得文。力術用明種作物市假我。我十放爸。樣務走股有區論倒；學體的達；到呢解男用隨我過但人不燈創無明神多頭有！減境有陽，生義今以一手。印到夜！密個假不回相們聽特住道包？法應停眾明情圖，達稱到。活作商，總什不小地國前童臺達；唱義麼學；告們但記高地素地它有超活、燈現過正意我大反下計爸車相子鄉類，主覺常病銀在部一助於規。
      {/if}
      
    </p>
  </div>
</div>

<style>
  .chief {
    width: 100%;
    overflow: auto;
    background-color: #3d1101;
    color: #fff;
    height: auto;
    overflow-y: hidden;
  }
  .chief .chief-img {
    width: 45%;
    margin-left: 42px;
    height: 460px;
    float: left;
    background-position: center center;
  }
  @media (max-width: 768px) {
    .chief .chief-img {
      margin-left: 20px;
    }
  }
  @media (max-width: 414px) {
    .chief .chief-img {
      width: 100%;
      margin-left: 0;
      background-position: 100% center;
    }
  }
  .chief .chief-today {
    float: right;
    width: 40%;
    padding: 10% 7% 0 0;
    line-height: 20px;
    font-size: 16px;
  }
  @media (max-width: 768px) {
    .chief .chief-today {
      padding: 5% 5% 0 0;
    }
  }
  @media (max-width: 414px) {
    .chief .chief-today {
      width: 80%;
      padding: 10%;
    }
  }
  .chief .chief-today .chief-name {
    width: 100%;
    font-size: 20px;
    float: left;
    line-height: 25px;
    margin-bottom: 15px;
  }
  .chief .chief-today .chief-name:first-child {
    margin-bottom: 0px;
  }
  .chief .chief-today .chief-name:first-child span {
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
