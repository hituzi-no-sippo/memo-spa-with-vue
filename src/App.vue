<template>
  <div class="
    flex
    m-5
    p-3
    border-green-400
    border-4
    h-full
  ">
    <router-view
      name="TitleList"
      :titles="extractTitle"
      @edit="openEditView"
      @add="add"
    />
    <router-view
      name="EditView"
      :key="$route.path"
      @update="update"
      @remove="remove"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
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

    const extractTitle = computed(() => {
      return contents.value.map(content => content.title)
    })

    onMounted(() => {
      if (localStorage.getItem('memos')) {
        try {
          contents.value = JSON.parse(localStorage.getItem('memos'))
        } catch(e) {
          localStorage.removeItem('memos')
        }
      }
    })

    return { openEditView, closeEditView, update, remove, add, extractTitle }
  }
}
</script>

<style>
#app {
  width: 540px;
  height: 960px;
}
</style>
