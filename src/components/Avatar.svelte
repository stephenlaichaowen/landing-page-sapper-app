<script>
  import langStore from './stores/langStore.js'
  import avatarStore from './stores/avatarStore.js'
  import Spinner from './Spinner.svelte'
  import { onMount } from 'svelte'
</script>

<div class="avatar">
  <div>
    {#if $langStore}
      Listen to what others think
    {:else}
      聽聽別人的感想
    {/if}
  </div>
  <ul>
    {#each $avatarStore as item}
      <li>
        <img src={item.image} alt="" />
        <div class="impression">
          {#if $langStore}
            <span>{item.nameEng}</span>
            <span>{item.contentEng}</span>
            <span>{item.titleEng}</span>
          {:else}
            <span>{item.nameChn}</span>
            <span>{item.contentChn}</span>
            <span>{item.titleChn}</span>
          {/if}
        </div>
      </li>
    {:else}
      <Spinner />
    {/each}
  </ul>
</div>

<style>
  ul {
    margin: 0;
    padding: 0;
  }
  .avatar {
    width: 100%;
    overflow: auto;
    margin-bottom: 5%;
  }
  .avatar > div {
    text-align: center;
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 24px;
  }
  @media (max-width: 414px) {
    .avatar > div {
      margin-top: 10%;
    }
  }
  .avatar ul {
    width: 90%;
    margin: 0 5% 0 5%;
  }
  .avatar ul li {
    display: inline-block;
    width: 33.33333%;
    float: left;
  }
  @media (max-width: 414px) {
    .avatar ul li {
      width: 100%;
    }
  }
  .avatar ul li img {
    border-radius: 100px;
    width: 20%;
    float: left;
  }
  .avatar ul li .impression {
    width: 70%;
    float: right;
    padding-right: 7%;
    padding-left: 3%;
  }
  @media (max-width: 414px) {
    .avatar ul li .impression {
      width: 77%;
      padding-right: 0;
    }
  }
  .avatar ul li .impression span {
    width: 100%;
    float: left;
    margin-bottom: 25px;
    font-size: 16px;
  }
  .avatar ul li .impression span:last-child {
    text-align: right;
  }
</style>