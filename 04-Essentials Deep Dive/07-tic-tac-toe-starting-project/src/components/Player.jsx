import { useState } from "react";
export default function Player({ name, symbol }) {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayername] = useState(name);

  function handleEditClick() {
    setIsEdit((editing) => !editing);
  }

  function handleChange(event) {
    setPlayername(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {!isEdit ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleChange}
          />
        )}

        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEdit ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
