export default function Content(props) {
  return (
    <main className={props.darkMode ? "main" : "light-main"}>
      <h1 className="items-header">Fun facts about React</h1>
      <ul className="fun-items">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
