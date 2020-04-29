import { writable } from 'svelte/store'

const featureStore = writable([
  {
    image: 'https://stephenlaichaowen.github.io/my-assets/img/feature_1.png',
    titleEng: 'Local vegetables',
    contentEng: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla est perferendis expedita, sed a quaerat quis facilis dolor laborum id accusantium sit neque quas qui, officia reprehenderit eum voluptas! Placeat quos ab voluptas quod, aliquam molestias',
    titleChn: '本土蔬菜',
    contentChn: '錢表就別我音同我時，中道創他外電時了不作樂開作義親受手會出角我亞坡獨；和的演、後統樓成也化十行多看辦實出感體年香效是力種文當笑；一羅出？相一英到，我本管……展到也負論同站地我花小我起完術出，稱以學定一心如，稱似基隊，有小腳線有演早，息的手……得港色'
  },
  {
    image: 'https://stephenlaichaowen.github.io/my-assets/img/feature_2.png',
    titleEng: 'Professional Michelin chef',
    contentEng: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla est perferendis expedita, sed a quaerat quis facilis dolor laborum id accusantium sit neque quas qui, officia reprehenderit eum voluptas! Placeat quos ab voluptas quod, aliquam molestias',
    titleChn: '專業米其林廚師',
    contentChn: '錢表就別我音同我時，中道創他外電時了不作樂開作義親受手會出角我亞坡獨；和的演、一羅出？相一英到，我本管……展到也負論同站地我花小我起完術出，稱以學定一心如，稱似基隊，有小腳線有演早，息的手……得港色，質你大出全但一，面白了、兩小媽平給比和有可用習業笑相者？'
  },
  {
    image: 'https://stephenlaichaowen.github.io/my-assets/img/feature_3.png',
    titleEng: 'Sticking to profession',
    contentEng: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla est perferendis expedita, sed a quaerat quis facilis dolor laborum id accusantium sit neque quas qui, officia reprehenderit eum voluptas! Placeat quos ab voluptas quod, aliquam molestias',
    titleChn: '對於專業不能退讓',
    contentChn: '和的演、後統樓成也化十行多看辦實出感體年香效是力種文當笑；一羅出？相一英到，我本管……展到也負論同站地我花小我起完術出，稱以學定一心如，稱似基隊，有小腳線有演早，息的手……得港色，質你大出全但一，面白了、兩小媽平給比和有可用習業笑相者？'
  }
])

export default featureStore