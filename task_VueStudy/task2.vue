<!-- 双向绑定,v-model -->
<script setup>
import {ref} from 'vue'

const message = ref('Hello,JavaScript!')

</script>

<template>
  <p>{{ message }}</p>
  <input v-model="message">
</template>