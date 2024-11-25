"use client";

import { createEffect } from "solid-js";
import { createStore } from "solid-js/store";
import { renderLog } from "~/utils/log";

export default function UserStore() {
  renderLog("User");
  const [user, setUser] = createStore({ name: "Florin", accountState: "online" });

  createEffect(() => console.log(`user accountState changed to <${user.accountState}>`));

  function logout() {
    setUser("accountState", "offline");
  }

  return (
    <div class="user">
      <button onClick={() => setUser("name", "Alin")}>(rename)</button>
      <p class="user-name">🧑‍💻 {user.name}</p>
      <p class={`user-state  ${user.accountState}`}>
        <span>{user.accountState}</span>
      </p>
      <button onClick={() => logout()}>(logout)</button>
    </div>
  );
}
