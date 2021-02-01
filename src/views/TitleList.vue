<template>
  <div class="titleList">
    <ul>
      <li v-for="(content, index) in contents" :key="index">
        <span @click="edit(index)">{{content.title}}</span>
      </li>
    </ul>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'TitleList',
  props: {
    contents: Array
  },
  emits: ['edit', 'add'],
  setup(_, { emit }) {
    const edit = (index) => {
      emit('edit', index)
    }
    const add = () => {
      emit('add')
    }

    return { edit, add }
  }
}
</script>
