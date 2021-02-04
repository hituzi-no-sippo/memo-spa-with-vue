<template>
  <div>
    <input v-model="content.title" />
    <textarea v-model="content.body" />
  </div>
</template>

<script>
import { reactive } from 'vue'

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

    return { content }
  }
}
</script>
