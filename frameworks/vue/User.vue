<script setup lang="ts">
renderLog("User");

const userState = reactive({
  name: "Florin",
  accountState: "online"
});

watchEffect(() => console.log(`user accountState changed to <${userState.accountState}>`));

function logout() {
  userState.accountState = "offline";
}
</script>

<template>
  <div class="user">
    <button v-on:click="userState.name = 'Alin'">(rename)</button>

    <p class="user-name">🧑‍💻 {{ userState.name }}</p>

    <p class="user-state" :class="userState.accountState">
      <span>{{ userState.accountState }}</span>
    </p>

    <button v-on:click="logout">(logout)</button>
  </div>
</template>
