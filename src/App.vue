<template>
  <router-view
    name="TitleList"
    :contents="contents"
    @edit="openEditView"
  />
  <router-view
    name="EditView"
    :key="$route.path"
  />
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  setup() {
    const contents = [
      {title: 'aa', body: 'bb'},
      {title: 'cc', body: 'dd'}
    ]
    const router = useRouter()

    const openEditView = (index) => {
      router.push({ name: 'editViewOpen',
                    params: { index, ...contents[index] }})
    }

    return { contents, openEditView }
  }
}
</script>
