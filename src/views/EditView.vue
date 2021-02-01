<template>
  <div>
    <span>{{ title }}</span>
    <span>{{ body }}</span>
  </div>
</template>

<script>
export default {
  name: 'Edit',
  props: {
    title: { type: String, required: true, },
    body: { type: String, required: true, },
    index: { type: String, required: true, },
  },
}
</script>
