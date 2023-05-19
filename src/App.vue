<script>
import navigation from '@/components/navigation.vue'
import {defineComponent} from "vue";
import Navigation from "@/components/navigation.vue";
export default defineComponent({
  components: {Navigation},
  component:{
    navigation
  }
})
</script>
<template>
  <p>test</p>
  <navigation>
  </navigation>
</template>
<style>

</style>