<template>
  <TitleList :contents="contents" />
</template>

<script>
import TitleList from './views/TitleList.vue'

export default {
  name: 'App',
  components: {
    TitleList
  },
  setup() {
    const contents = [
      {title: 'aa', body: 'bb'},
      {title: 'cc', body: 'dd'}
    ]

    return { contents }
  }
}
</script>
