<template>
  <div>
    <input v-model="content.title" />
    <textarea v-model="content.body" />
    <span v-if="isEmptyTitle">文字を入力してください</span>
    <button
      :disabled="isEmptyTitle"
      @click="update"
    >
      Update
    </button>
    <button @click="remove">Delete</button>
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
  setup(props, { emit }) {
    const content = reactive({
      title: props.title,
      body:  props.body
    })

    const isEmptyTitle = computed(() => {
      return content.title === ''
    })

    const update = () => {
      emit('update', props.index, content)
    }
    const remove = () => {
      emit('remove', props.index)
    }

    return { content, isEmptyTitle, update, remove  }
  }
}
</script>
