<template>
  <div class="
    m-2
    w-32
    h-5/6
  ">
    <h1 class="
      text-3xl
      text-green-700
      font-bold
      py-2
    "
    >メモ一覧</h1>
    <ul class="
      overflow-y-auto
      max-h-full
      my-2
    ">
      <li
        v-for="(content, index) in contents"
        :key="index"
        class="
          my-3
          text-2xl
          leading-5
          text-base
          font-medium
          cursor-pointer
          hover:text-green-500
          hover:underline
          truncate
        "
      >
        <span @click="edit(index)">{{content.title}}</span>
      </li>
    </ul>
    <button
      @click="add"
      class="
        width-2
        text-2xl
        font-medium
        bg-green-600
        hover:bg-green-500
        text-white
        rounded-full
        py-1
        px-3
        my-2
      "
    >+</button>
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
