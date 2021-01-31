<template>
  <ul>
    <li v-for="(content, index) in contents" :key="index">
      {{ content.title }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TitleList',
  props: {
    contents: Array
  },
}
</script>
