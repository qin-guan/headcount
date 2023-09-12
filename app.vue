<script setup>
import { startRegistration } from '@simplewebauthn/browser'

const state = reactive({
  userName: '',
  userID: '',
})

async function register() {
  const data = await $fetch('/api/register', {
    method: 'POST',
    body: state,
  })
  await startRegistration(data)
}
</script>

<template>
  <div class="flex flex-col h-screen items-center justify-center space-y-4">
    <UInput v-model="state.userName" placeholder="Username" />
    <UInput v-model="state.userID" placeholder="User ID" />
    <UButton @click="register">
      Register
    </UButton>
  </div>
</template>
