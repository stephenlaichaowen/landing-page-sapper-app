<script>
  import langStore from './stores/langStore.js'
  import { onMount } from 'svelte'

  let lang = true

  onMount(() => {
    langStore.subscribe(value => {
      lang = value
    })
  })
</script>

<div class="recommend">
  <h2>
    <span style="line-height: 2.5rem; text-align: center; display: block">
      {#if lang}
        Big juicy burger that you can't miss
      {:else}
        咬一口就無法忘懷的漢堡
      {/if}
    </span>
  </h2>
  <span>
    {#if lang}
      The taste you can't miss
    {:else}
      七夕絕對無法錯過的好滋味
    {/if}
  </span>
  <span>
    <i class="fas fa-utensils" aria-hidden="true" />
    {#if lang}
      Big juicy burger
    {:else}
      多汁大漢堡
    {/if}
    <i class="fas fa-utensils" aria-hidden="true" />
  </span>
</div>

<style>
  .recommend {
    width: 405px;
    margin: auto;
    overflow: auto;
    margin-top: 85px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 18px 20px;
  }
  @media (max-width: 575px) {
    .recommend {
      width: 90%;
      padding: 18px 0px;
    }
  }
  .recommend span {
    width: 100%;
    float: left;
    text-align: center;
    font-size: 16px;
    line-height: 30px;
  }
  .recommend span i {
    margin-left: 7px;
    margin-right: 7px;
    font-size: 16px;
  }
  .recommend h2 {
    margin-bottom: 20px;
  }
  .recommend h2 span {
    width: auto;
    font-size: 36px;
    float: none;
  }
  @media (max-width: 470px) {
    .recommend h2 span {
      width: 100%;
      float: left;
      line-height: 38px;
    }
  }
</style>

