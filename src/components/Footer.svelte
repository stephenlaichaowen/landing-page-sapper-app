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

<div class="footer">
  <div class="about">
    <span>
      {#if lang}
        About MacBurger
      {:else}
        關於多汁大漢堡
      {/if}
    </span>
    <p>
      {#if lang}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
        reiciendis earum, consectetur beatae repellendus doloribus voluptates quas
        est ducimus obcaecati incidunt quos quo, illo in.
      {:else}
        態國經願民美得了建社文易內專也久導領心為……一海風。大就節戰特一出外一，表學金，黃去到然調原眼再中，和支多在三，多的一出會山戰配的完物是；電造單是直家的的，和近員？
      {/if}
      
    </p>    
  </div>
  <div class="contact">
    <span>
      {#if lang}
        Contact
      {:else}
        聯絡方式
      {/if}
    </span>
    <ul>
      <li>
        {#if lang}
          Taipei, Taiwan, China
        {:else}
          復興南路二段清粥小菜
        {/if}
      </li>
      <li>+886 886 886</li>
      <li>
        <a href="#/">slai@stephenlaichaowen.com</a>
      </li>
    </ul>
  </div>
  <div class="link">
    <img
      width="240"
      height="50"
      src="https://i.ya-webdesign.com/images/burger-logo-png-4.png"
      alt="" />
    <ul>
      <li>
        <a href="#/">
          <i class="fab fa-google-plus-square google" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="#/">
          <i class="fab fa-twitter-square twitter" aria-hidden="true" />
        </a>
      </li>
      <li>
        <a href="#/">
          <i class="fab fa-facebook-square facebook" aria-hidden="true" />
        </a>
      </li>
    </ul>
  </div>
</div>

<style>
  ul {
    margin: 0;
    padding: 0;
  }
  .footer {
    width: 100%;
    padding-top: 5%;
    padding-bottom: 5%;
    background-color: #efe9e7;
    overflow: auto;
    font-size: 16px;
  }
  @media (max-width: 414px) {
    .footer {
      padding-top: 10%;
      padding-bottom: 10%;
    }
  }
  .footer > div {
    float: left;
  }
  .footer .about {
    width: 28.33333%;
    padding-left: 5%;
  }
  @media (max-width: 414px) {
    .footer .about {
      width: 95%;
      margin-bottom: 30px;
    }
  }
  .footer .about span {
    font-size: 24px;
  }
  .footer .about p {
    margin-top: 20px;
    line-height: 20px;
  }
  .footer .contact {
    width: 29.33333%;
    padding-left: 4%;
  }
  @media (max-width: 414px) {
    .footer .contact {
      width: 96%;
      margin-bottom: 20px;
    }
  }
  .footer .contact span {
    font-size: 24px;
  }
  .footer .contact ul {
    margin-top: 20px;
  }
  @media (max-width: 414px) {
    .footer .contact ul {
      padding-left: 6%;
    }
  }
  .footer .contact ul li {
    margin-bottom: 2px;
    list-style-type: disc;
  }
  .footer .contact ul li a {
    color: #3d1101;
  }
  .footer .link {
    float: right;
    padding-right: 5%;
  }
  .footer .link img {
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .footer .link ul {
    text-align: right;
  }
  .footer .link ul li {
    display: inline;
    font-size: 40px;
    margin-left: 10px;
  }
  .footer .link .google {
    color: #ff5151;
  }
  .footer .link .twitter {
    color: #46a3ff;
  }
  .footer .link .facebook {
    color: #004b97;
  }
</style>
