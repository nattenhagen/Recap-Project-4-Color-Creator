import "./Theme.css";
import ThemePreview from "./ThemePreview";
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { ColorList } from "./ColorList";

export default function Theme({ name, colors }) {
  const [showDetails, setShowDetails] = useState(false);
  function toggleDetails() {
    setShowDetails(!showDetails);
  }

  return (
    <section className="theme">
      <button className="theme__toggle-details-button" onClick={toggleDetails}>
        <h2 className="theme__title">{name}</h2>
        {showDetails ? (
          <IconChevronUp size="3rem" />
        ) : (
          <IconChevronDown size="3rem" />
        )}
      </button>
      {showDetails ? (
        <ColorList colors={colors} />
      ) : (
        <ThemePreview colors={colors} />
      )}
    </section>
  );
}
