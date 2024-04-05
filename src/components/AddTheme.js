import "./AddTheme.css";
export function AddTheme({ themes, addTheme }) {
  function onSubmit(e) {
    e.preventDefault();
    console.log("onSubmit", e);
    const themeName = e.target.elements.themeName.value;
    const color1 = e.target.elements.color1.value;
    const color2 = e.target.elements.color2.value;
    const color3 = e.target.elements.color3.value;
    const color4 = e.target.elements.color4.value;

    const newTheme = {
      id: themeName,
      name: themeName,
      colors: [
        {
          role: "primary",
          value: color1,
          name: color1,
        },
        {
          role: "secondary",
          value: color2,
          name: color2,
        },
        {
          role: "surface",
          value: color3,
          name: color3,
        },
        {
          role: "surface-on",
          value: color4,
          name: color4,
        },
      ],
    };
    console.log("themeName", themeName);
    console.log("newTheme", newTheme);

    addTheme([...themes, newTheme]);
  }
  return (
    <form className="formTheme" onSubmit={onSubmit}>
      <h3>Add a Theme</h3>
      <div className="formWrapper">
        <div>
          <label htmlFor="theme-name"> Name </label>
          <input required type="text" name="themeName" id="theme-name" />
        </div>
        <div>
          <label htmlFor="color-1"> Primary </label>
          <input required type="color" name="color1" id="color1" />
        </div>
        <div>
          <label htmlFor="color2"> Secondary </label>
          <input required type="color" name="color2" id="color2" />
        </div>
        <div>
          <label htmlFor="color3"> Surface </label>
          <input required type="color" name="color3" id="color3" />
        </div>
        <div>
          <label htmlFor="color4"> Surface-on </label>
          <input required type="color" name="color4" id="color4" />
        </div>
      </div>

      <button className="addTheme" type="submit">
        Add Theme
      </button>
    </form>
  );
}
