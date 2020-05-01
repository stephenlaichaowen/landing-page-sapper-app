<script>
  import langStore from './stores/langStore.js'
  import OpenStreetMap from './OpenStreetMap.svelte'
  import { onMount } from 'svelte'

  let name
  let tel
  let email
  let number = 0
  let select = "notneed"
  let nameError = false
  let telError = false
  let emailError = false
  let numberError = false
  let markerTitle = '<p>BackYard Burger</p>'

  $: if (name != "") nameError = false
  $: if (tel != "") telError = false
  $: if (email != "") emailError = false
  $: if (number != 0) numberError = false
  
  function cancelOrder() {
    const prompt = confirm(`Are you sure to clear data ?`)
    if (prompt === true) {
      name = "";
      tel = "";
      email = "";
      number = 0;
      nameError = false
      telError = false
      emailError = false
      numberError = false
    } else {
      return
    }
  }

  function submitOrder() {
    if (name === "" || name == null) {
      nameError = true;
      return;
    }

    if (tel === "" || tel == null) {
      telError = true;
      return;
    }

    if (email === "" || email == null) {
      emailError = true;
      return;
    }

    if (number === 0 || number == null) {
      numberError = true;
      return;
    }

    name = "";
    tel = "";
    email = "";
    number = 0;

    alert(`Your order has been successfully submitted !`)
  }  
</script>

<div class="map">
  <div class="map-title">
    {#if $langStore}
      <span>There are no enough seats</span>  
      <span>Should you make a reservation first？</span>
    {:else}
      <span>我們的位置不太夠坐</span> 
      <span>要不要先訂位呢？</span>
    {/if}
  </div>
  <OpenStreetMap />
  <form on:submit|preventDefault={submitOrder}>
    <label for="name">
      <span>
        {#if $langStore} Name {:else} 姓名 {/if}
      </span>
      <input id="name" type="text" bind:value={name} style="margin-bottom:0" />
      {#if nameError}
        <span class="errorMessage" style="margin-bottom: 0; font-size: 12px">
          {#if $langStore} Name is required {:else} 姓名不可空白 {/if}          
        </span>
      {/if}
    </label>
    <label for="tel">
      <span style="margin-top:0.5rem">
        {#if $langStore} TEL {:else} 電話 {/if}  
      </span>
      <input id="tel" type="text" bind:value={tel} style="margin-bottom:0" />
      {#if telError}
        <span class="errorMessage" style="margin-bottom: 0; font-size: 12px">
          {#if $langStore} Telephone is required {:else} 電話號碼不可以空白 {/if}
        </span>
      {/if}
    </label>
    <label for="email">
      <span style="margin-top:1rem">
        {#if $langStore} Email {:else} 電子信箱 {/if}
      </span>
      <input id="email" type="email" bind:value={email} style="margin-bottom:0" />
      {#if emailError} 
        <span class="errorMessage" style="margin-bottom: 0; font-size: 12px">
          {#if $langStore} Email is required {:else} 電子郵箱不可以空白 {/if}          
        </span>
      {/if}
    </label>
    <label for="number">
      <span style="margin-top:1rem">
        {#if $langStore} Number {:else} 人數 {/if}
      </span>
      <input id="number" type="number" bind:value={number} style="margin-bottom:0" />
      {#if numberError}
        <span class="errorMessage" style="margin-bottom: 0; font-size: 12px">
          {#if $langStore} Number can't be zero {:else} 人數不可以為零 {/if}
        </span>
      {/if}
    </label>
    <span style="margin-top: 1rem; margin-bottom: 0">
      {#if $langStore} Vegetarian {:else} 是否需要素食 {/if}
    </span>
    <span style="margin-top: 2px">
      {#if $langStore} Yes {:else} 是 {/if}
      <input type="radio" value="need" bind:group={select} />
        {#if $langStore} No {:else} 否 {/if}
      <input type="radio" value="notneed" bind:group={select} />
    </span>
    <div class="sent-form">
      <a href="#/" class="cancel" on:click|preventDefault={cancelOrder}>
        {#if $langStore} Cancel {:else} 取消 {/if}
      </a>
      <a type="submit" href="#/" class="sent" on:click|preventDefault={submitOrder}>
        {#if $langStore} Submit {:else} 送出 {/if}
      </a>
    </div>
  </form>
</div>

<style>
  a {
    text-decoration: none;
  }
  .map {
    background-color: #fffafa;
    overflow: auto;
    padding: 0 5% 5% 5%;
  }
  .map .map-title {
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 24px;
    overflow: auto;
    overflow-y: hidden;
  }
  @media (max-width: 414px) {
    .map .map-title {
      margin-top: 10%;
    }
  }
  .map .map-title span {
    width: 100%;
    float: left;
    line-height: 30px;
    text-align: center;
  }
  .map form {
    float: right;
    height: 386px;
    width: 45%;
    position: relative;
  }
  @media (max-width: 414px) {
    .map form {
      width: 100%;
      margin-top: 10%;
    }
  }
  .map form span {
    width: 100%;
    float: left;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .map form input[type="text"],
  .map form input[type="email"],
  .map form input[type="number"] {
    width: 95%;
    float: left;
    margin-bottom: 15px;
    border-style: none;
    border: 1px solid #d0d0d0;
    border-radius: 3px;
    height: 28px;
    padding-left: 10px;
  }
  .map form input[type="radio"] {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin: 0;
    margin-right: 35px;
  }
  .map form input[type="radio"]:hover {
    border-color: blue;
  }
  .map form input[type="radio"]::before {
    content: " ";
    display: block;
    width: 60%;
    height: 60%;
    margin: 17.5% 17.5%;
    border-radius: 50%;
  }
  .map form input[type="radio"]:checked:before {
    background: #66b3ff;
  }
  .map form .sent-form {
    position: absolute;
    bottom: 0;
    right: 10px;
    font-family: "PingFangTC-Regular";
  }
  .map form .sent-form a {
    padding: 5px 15px;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
  }
  .map form .sent-form .cancel {
    background-color: gray;
  }
  .map form .sent-form .sent {
    background-color: #ff5809;
    margin-left: 15px;
  }

  .errorMessage {
    color: red;
    /* 		margin-bottom: 0; */
  }
</style>