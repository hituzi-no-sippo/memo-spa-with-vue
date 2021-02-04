<template>
  <div>
    <input v-model="content.title" />
    <textarea v-model="content.body" />
    <span v-if="isEmptyTitle">文字を入力してください</span>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  name: 'Edit',
  props: {
    title: { type: String, required: true, },
    body: { type: String, required: true, },
    index: { type: String, required: true, },
  },
  setup(props) {
    const content = reactive({
      title: props.title,
      body:  props.body
    })
    const isEmptyTitle = computed(() => {
      return content.title === ''
    })

    return { content, isEmptyTitle }
  }
}
</script>
