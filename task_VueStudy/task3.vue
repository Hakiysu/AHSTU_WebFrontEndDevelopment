<!-- v-for的使用 -->
<script setup>
import {ref} from "vue";
// 为了保证每个人的id都不一样，所以使用一个变量来记录id
let id = 0
// init data about person information to test v-for
const personInformation = ref([
  {id: id++, name: '张三', age: 18, sex: '男'},
  {id: id++, name: '李四', age: 19, sex: '女'},
  {id: id++, name: '王五', age: 20, sex: '男'}
])
</script>

<template>
  <table>
    <tr>
      <th>姓名</th>
      <th>年龄</th>
      <th>性别</th>
    </tr>
    <tr v-for="information in personInformation" :key="information.id">
      <!-- v-for的使用 -->
      <td>
        {{ information.name }}
      </td>
      <td>
        {{ information.age }}
      </td>
      <td>
        {{ information.sex }}
      </td>
    </tr>
  </table>
</template>