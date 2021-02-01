<template>
  <ul>
    <li v-for="(content, index) in contents" :key="index">
      <span @click="edit(index)">{{content.title}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TitleList',
  props: {
    contents: Array
  },
  emits: ['edit'],
  setup(_, { emit }) {
    const edit = (index) => {
      emit('edit', index)
    }

    return { edit }
  }
}
</script>
