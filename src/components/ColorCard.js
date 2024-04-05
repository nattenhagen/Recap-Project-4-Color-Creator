import "./ColorCard.css";

export function ColorCard({ color }) {
  return (
    <article className="color-card">
      <div
        className="color-card__display"
        style={{ backgroundColor: color.value }}
      ></div>
      <div className="color-card__info">
        <span className="color-card__role">{color.role}</span>
        <span className="color-card__hex">{color.value}</span>
      </div>
    </article>
  );
}

export default function ColorList({ colors }) {
  return (
    <ul className="color-list">
      {colors.map((color) => (
        <li key={color.role}>
          <ColorCard color={color} />
        </li>
      ))}
    </ul>
  );
}
