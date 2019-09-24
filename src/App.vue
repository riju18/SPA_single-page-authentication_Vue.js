<template>
  <div>
    <com-header/>
    <router-view/>
    <com-footer/>
  </div>
</template>

<script>
import comHeader from './components/Header_Footer/Header'
import comFooter from './components/Header_Footer/Footer'

export default {
  components:{
    comFooter,
    comHeader
  }
}
</script>

<style>
  @import "./assets/style.css";
</style>
