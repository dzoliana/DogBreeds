//components/layout/Layout.js
import classes from "./Layout.module.css";

function Layout(props) {
  return (
    <div className={classes.top}>
      <div className={classes.header}>
        <header className={classes.title_container}>
          <div>Dog breeds</div>
        </header>
      </div>
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
