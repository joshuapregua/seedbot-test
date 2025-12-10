<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
type AppInfo = { name: string; version: string; platform: string; electron: string; chrome: string }
const appInfo = ref<AppInfo | null>(null)
const error = ref<string | null>(null)

onMounted(async () => {
  try {
    appInfo.value = await (window as any).electronAPI.getAppInfo()
  } catch (e) {
    error.value = (e as Error).message
  }
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
  <div class="card">
    <h3>App Info (via IPC)</h3>
    <pre v-if="appInfo">{{ appInfo }}</pre>
    <p v-else-if="error" style="color:red">Error: {{ error }}</p>
    <p v-else>Loading app info…</p>
  </div>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
