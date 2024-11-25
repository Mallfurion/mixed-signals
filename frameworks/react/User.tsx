"use client";

import { renderLog } from "@/utils/log";
import { useEffect, useState } from "react";

export default function User() {
  renderLog("User");
  const [user, setUser] = useState({ name: "Florin", accountState: "online" });

  useEffect(() => console.log(`user accountState changed to <${user.accountState}>`), [user.accountState]);

  function logout() {
    setUser({ ...user, accountState: "offline" });
  }

  return (
    <div className="user">
      <button onClick={() => setUser({ ...user, name: "Alin" })}>(rename)</button>
      <p className="user-name">🧑‍💻 {user.name}</p>
      <p className={`user-state  ${user.accountState}`}>
        <span>{user.accountState}</span>
      </p>
      <button onClick={() => logout()}>(logout)</button>
    </div>
  );
}
