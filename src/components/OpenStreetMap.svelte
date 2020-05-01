<script>
  import { onMount } from 'svelte'

  let markerTitle = '<p>BackYard Burger</p>'

  onMount(() => {  
    const mymap = L.map('tinymap', {
      center: [25.0285535, 121.5406971],
      zoom: 16
    })

    var greenIcon = new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    // 載入 openstreetmap 圖資
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'      
    }).addTo(mymap)
       
    L.marker([25.0285535, 121.5406971], {icon: greenIcon,}).addTo(mymap)     
      .bindPopup(markerTitle)
      .openPopup()    
  })
</script>

<div id="tinymap" class="tinymap"></div>

<style>
 .tinymap {
    height: 386px;
    width: 50%;
    float: left;
    border: 1px solid #d0d0d0;
  }
  @media (max-width: 414px) {
    .tinymap {
      width: 100%;
    }
  }
</style>