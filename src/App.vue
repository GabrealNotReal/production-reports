<template>
  <html lang="ar" dir="rtl" class="shabnam-font">
    <router-view></router-view>
  </html>
</template>

<script>

export default {

  name: 'App',
  components: {
  
  }
}
</script>

<style>

@font-face {
  font-family: fontShabnam;
  src: url('./assets/fonts/shabnam-font-v2.4.0/Shabnam.eot');
  src: url('./assets/fonts/shabnam-font-v2.4.0/Shabnam.eot?#iefix') format('fontShabnam-opentype'),
       url('./assets/fonts/shabnam-font-v2.4.0/Shabnam.woff') format('woff'),
       url('./assets/fonts/shabnam-font-v2.4.0/Shabnam.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.shabnam-font {
  font-family: fontShabnam;
}

</style>
