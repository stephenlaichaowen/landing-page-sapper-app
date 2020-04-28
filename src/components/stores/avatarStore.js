import { writable } from 'svelte/store'

const avatarStore = writable([
  {
    image: 'https://stephenlaichaowen.github.io/my-assets/img/avatar_1.png',
    nameEng: 'Stephen Curry',
    contentEng: "Since last time I dine in this restaurant, I have been imaging swallowing juicy burgers in my head and I just couldn't forget the taste",
    titleEng: '--NBA player',
    nameChn: '台北吃一口',
    contentChn: '自從吃了這家餐廳後，我口水流了一個多月沒停，下次不要再被我遇到，我然我一定連他們的桌子一起啃下去。',
    titleChn: '--產品經理',
  },
  {
    image: 'https://stephenlaichaowen.github.io/my-assets/img/avatar_2.png',
    nameEng: 'Donald Trump',
    contentEng: "Since last time I dine in this restaurant, I have been imaging swallowing juicy burgers in my head and I just couldn't forget the taste",
    titleEng: '--US president',
    nameChn: '廟口小霸王',
    contentChn: '自從吃了這家餐廳後，我口水流了一個多月沒停，下次不要再被我遇到，我然我一定連他們的桌子一起啃下去。',
    titleChn: '--金身道士',
  },
  {
    image: 'https://stephenlaichaowen.github.io/my-assets/img/avatar_3.png',
    nameEng: 'Elon Musk',
    contentEng: "Since last time I dine in this restaurant, I have been imaging swallowing juicy burgers in my head and I just couldn't forget the taste",
    titleEng: '--SpaceX founder',
    nameChn: '春天來了',
    contentChn: '自從吃了這家餐廳後，我口水流了一個多月沒停，下次不要再被我遇到，我然我一定連他們的桌子一起啃下去。',
    titleChn: '--美麗萬分',
  }
])

export default avatarStore