<template>
  <div class="
    flex
    flex-col
    m-4
    p-2
    border-green-400
    border-2
  ">
    <input
      v-model="content.title"
      class="
        text-2xl
        fond-bold
        border
        border-black
        focus:outline-none
        focus:ring-black
        focus:ring-2
        px-2
        my-2
        rounded-full
      "
    />
    <span
      v-if="isEmptyTitle"
      class="
        text-red-500
        font-bold
        text-center
      "
    >タイトルを入力してください</span>
    <textarea
      v-model="content.body"
      class="
        text-2xl
        fond-bold
        border
        border-black
        focus:outline-none
        focus:ring-black
        focus:ring-1
        px-2
        py-1
        my-4
        h-full
      "
    />
    <div
      class="
        buttons
        my-2
        text-center
      "
    >
      <button
        :disabled="isEmptyTitle"
        @click="update"
        class="
          bg-green-600
          hover:bg-green-500
          font-semibold
          text-white
          rounded-full
          px-4
          mx-3
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        Update
      </button>
      <button
        @click="remove"
        class="
          bg-green-600
          hover:bg-green-500
          font-semibold
          text-white
          rounded-full
          px-4
          mx-3
        "
      >Delete</button>
    </div>
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
