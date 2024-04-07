import { ColorCard } from "./ColorCard";

export function ColorList({ colors }) {
  return (
    <div>
      <ul className="color-list">
        {colors.map((color) => (
          <li key={color.role}>
            <ColorCard color={color} />
          </li>
        ))}
      </ul>
    </div>
  );
}
