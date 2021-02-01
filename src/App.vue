<template>
  <router-view
    name="TitleList"
    :contents="contents"
    @edit="openEditView"
  />
  <router-view
    name="EditView"
    :key="$route.path"
    @update="update"
    @remove="remove"
  />
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const contents = ref([
      {title: 'aa', body: 'bb'},
      {title: 'cc', body: 'dd'}
    ])
    const router = useRouter()

    const openEditView = (index) => {
      router.push({ name: 'editViewOpen',
                    params: { index, ...contents.value[index] }})
    }
    const closeEditView = () => {
      router.push({ name: 'home' })
    }

    const update = (index, content) => {
      contents.value[index] = content
      closeEditView()
    }
    const remove = (index) => {
      contents.value.splice(index, 1)
      closeEditView()
    }

    return { contents, openEditView, closeEditView, update, remove }
  }
}
</script>
