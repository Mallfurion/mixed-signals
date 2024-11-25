<script>
	import { renderLog } from "$lib";

  renderLog("User.svelte")
  const userState = $state({name: 'Florin', accountState: 'online'})
  $effect(() => console.log(`user accountState changed to <${userState.accountState}>`));

function logout() {
  userState.accountState = "offline";
}
</script>

<div class="user">
  <button onclick={() => userState.name = 'Alin'}>(rename)</button>

  <p class="user-name">🧑‍💻 {userState.name}</p>

  <p class="user-state {userState.accountState}">
    <span>{userState.accountState}</span>
  </p>

  <button onclick={logout}>(logout)</button>
</div>