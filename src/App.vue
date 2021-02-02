<template>
  <router-view
    name="TitleList"
    :contents="contents"
    @edit="openEditView"
    @add="add"
  />
  <router-view
    name="EditView"
    :key="$route.path"
    @update="update"
    @remove="remove"
  />
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const contents = ref([])
    const router = useRouter()

    const openEditView = (index) => {
      router.push({ name: 'editViewOpen',
                    params: { index, ...contents.value[index] }})
    }
    const closeEditView = () => {
      router.push({ name: 'home' })
    }

    const saveToLocalStorage = () => {
      localStorage.setItem('memos', JSON.stringify(contents.value));
    }

    const add = () => {
      contents.value.push({ title: 'new item', body: '' })
      saveToLocalStorage()
      openEditView(contents.value.length - 1)
    }
    const update = (index, content) => {
      contents.value[index] = content
      saveToLocalStorage()
      closeEditView()
    }
    const remove = (index) => {
      contents.value.splice(index, 1)
      saveToLocalStorage()
      closeEditView()
    }

    onMounted(() => {
      if (localStorage.getItem('memos')) {
        try {
          contents.value = JSON.parse(localStorage.getItem('memos'))
        } catch(e) {
          localStorage.removeItem('memos')
        }
      }
    })

    return { contents, openEditView, closeEditView, update, remove, add }
  }
}
</script>
