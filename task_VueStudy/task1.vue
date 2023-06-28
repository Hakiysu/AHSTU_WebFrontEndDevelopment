<!-- 双向绑定,v-bind -->
<script setup>
import {ref} from 'vue'

const message = ref('Hello,HTML!')

function reverse_button() {
  message.value = message.value.split('').reverse().join('')
}
</script>

<template>
  <!-- 使用p:id="message"似乎没有意义 -->
  <p>{{message}}</p>
  <br>
  <button @click="reverse_button">Reverse Message</button>

</template>