import "./Theme.css";
import ThemePreview from "./ThemePreview";
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { ColorList } from "./ColorList";

export default function Theme({ themes, deleteTheme, name, id, colors }) {
  function handleDeleteTheme() {
    const newThemes = themes.filter((theme) => theme.id !== id);
    console.log(newThemes);

    deleteTheme(newThemes);
  }
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
        <div>
          <button onClick={handleDeleteTheme} id="deleteButton">
            Delete Theme
          </button>
          <ColorList colors={colors} />
        </div>
      ) : (
        <ThemePreview colors={colors} />
      )}
    </section>
  );
}
