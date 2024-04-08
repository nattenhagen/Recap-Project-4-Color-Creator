import "./ColorCard.css";

import React, { useState, useEffect } from "react";

export function ColorCard({ color }) {
  const [colorName, setColorName] = useState(null);

  useEffect(() => {
    fetchColorName(color.value);
  });

  async function fetchColorName() {
    try {
      const response = await fetch(
        `https://www.thecolorapi.com/id?hex=${color.value.substring(1)}`
      );
      const data = await response.json();
      setColorName(data.name.value);
    } catch (error) {
      console.error("Error fetching color name:", error);
    }
    fetchColorName();
  }

  return (
    <div>
      <article className="color-card">
        <div
          className="color-card__display"
          style={{ backgroundColor: color.value }}
        ></div>
        <div className="color-card__info">
          <span className="color-card__role">{color.role}</span>
          <span className="color-card__hex">{color.value}</span>
          <span className="color-card__name">{colorName}</span>
        </div>
      </article>
    </div>
  );
}
