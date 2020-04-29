<script>
  import langStore from './stores/langStore.js'
  import featureStore from './stores/featureStore.js'
  import { onMount } from 'svelte'

  let lang = true
  let data = []
  
  onMount(() => {
    langStore.subscribe(value => {
      lang = value
    })

    featureStore.subscribe(value => {
      data = value
      // console.log(data);
    })
  })
</script>

<div class="feature">
  <div>
    <span>
      {#if lang}
        People are always asking
      {:else}
        客人總是在詢問
      {/if}
    </span>
    <span>
      {#if lang}
        What's the secret of being so delicious
      {:else}
        這麼好吃的秘訣是什麼
      {/if}
    </span>
  </div>
  <ul>
    {#each data as item}
      <li>
        <img
          src={item.image}
          alt="" />
        <span>
          {#if lang}
            {item.titleEng}
          {:else}
            {item.titleChn}
          {/if}
        </span>
        <p>
          {#if lang}
            {item.contentEng}
          {:else}
            {item.contentChn}          
          {/if}        
        </p>
      </li>
    {:else}
      <p>There are no data, please check store</p>
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
    /* 	padding: 5%; */
    /* 	padding-left: 0; */
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
