"use client";

import { createEffect, createSignal } from "solid-js";
import { renderLog } from "~/utils/log";

export default function User() {
  renderLog("User");
  const [user, setUser] = createSignal({ name: "Florin", accountState: "online" });

  createEffect(() => console.log(`user accountState changed to <${user().accountState}>`));

  function logout() {
    setUser({ ...user(), accountState: "offline" });
  }

  return (
    <div class="user">
      <button onClick={() => setUser({ ...user(), name: "Alin" })}>(rename)</button>
      <p class="user-name">🧑‍💻 {user().name}</p>
      <p class={`user-state  ${user().accountState}`}>
        <span>{user().accountState}</span>
      </p>
      <button onClick={() => logout()}>(logout)</button>
    </div>
  );
}
