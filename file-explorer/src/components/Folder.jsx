import { useState } from "react";

function Folder({ explorer }) {
  const [expand, setExpand] = useState(false);

  if (explorer.isFolder) {
    return (
      <div>
        {/* Clickable folder row */}
        <div className="Folder" onClick={() => setExpand(!expand)}>
          <span>{expand ? "📂" : "📁"}</span>
          <span>{explorer.name}</span>
          <span style={{ marginLeft: "auto", fontSize: "12px", color: "#6c7086" }}>
            {expand ? "▼" : "▶"}
          </span>
        </div>

        {/* Children shown below folder row */}
        {expand && (
          <div className="children">
            {explorer.items.map((exp) => (
              <Folder explorer={exp} key={exp.id} />
            ))}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="file">
        <span>📄</span>
        <span>{explorer.name}</span>
      </div>
    );
  }
}

export default Folder;