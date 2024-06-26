import "./App.css";
import Theme from "./components/theme";
import { themes as dbThemes } from "./db";
import { AddTheme } from "./components/AddTheme";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [themes, addTheme] = useLocalStorageState("themes", {
    defaultValue: dbThemes,
  });

  console.log("themes", themes);

  return (
    <>
      <header className="header">
        <h1>Theme Creator</h1>
      </header>
      <div>
        <AddTheme themes={themes} addTheme={addTheme} />
      </div>
      <main className="main-container">
        <ul className="theme-list">
          {themes.map((theme) => (
            <li key={theme.id}>
              <Theme
                themes={themes}
                deleteTheme={addTheme}
                name={theme.name}
                id={theme.id}
                colors={theme.colors}
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
