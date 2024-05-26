import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import styles from "./HamburgerMenu.module.css";

export function HamburgerMenu(links: Array<string>) {
  const [toggled, setToggled] = useState(false);

  const toggle = (event: React.MouseEvent) => {
    event.preventDefault();
    setToggled(!toggled);
  };

  return (
    <div className={styles.hamburgerMenu}>
      <div className={styles.logo}>
        <h5>Grocery App</h5>
      </div>
      <div className={`${styles.bigNav} ${toggled ? "visible" : "hidden"}`}>
        <nav>
          <ol>
            <li></li>
          </ol>
        </nav>
      </div>
      <div className={styles.basket}>{/* button */}</div>
      <div className={styles.mobileNav}>
        <HamburgerIcon
          isToggled={toggled}
          onClick={toggle}
        />
        <div className={`${styles.bigNav} ${toggled ? "visible" : "hidden"}`}>
          <nav>
            <ol>
              <li></li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}
