export default function NavBar(props) {
  return (
    <nav className={props.darkMode ? "nav-bar" : "light-nav-bar"}>
      <section className="nav-part1">
        <img src="./src/assets/react.svg" alt="Nav-Logo" />
        <h3>ReactFacts</h3>
      </section>
      <div className="toggle-div" onClick={props.handleClick}>
        <h4>Dark</h4>
        <p>
          <span>aa </span>
        </p>
        <h4>Light</h4>
      </div>
    </nav>
  );
}
