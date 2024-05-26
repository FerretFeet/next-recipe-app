import { useState } from "react";
import HamburgerIcon from "../HamburgerMenu/HamburgerIcon";
import styles from "./SiteHeader.module.css";

export function SiteHeader({ links }: { links: string[] }) {
  //   const [toggled, setToggled] = useState(false);
  //   console.log(links);

  //   const toggle = (event: React.MouseEvent) => {
  //     event.preventDefault();
  //     setToggled(!toggled);
  //   };

  return (
    <div className={styles.hamburgerMenu}>
      <div className={styles.logo}>
        <h5>Grocery App</h5>
      </div>
      <div className={`${styles.bigNav}`}>
        <nav>
          <ol>
            <li></li>
          </ol>
        </nav>
      </div>
      <div className={styles.basket}>{/* button */}</div>
    </div>
  );

  //   return (
  //     <div className={styles.hamburgerMenu}>
  //       <div className={styles.logo}>
  //         <h5>Grocery App</h5>
  //       </div>
  //       <div className={`${styles.bigNav} ${toggled ? "visible" : "hidden"}`}>
  //         <nav>
  //           <ol>
  //             <li></li>
  //           </ol>
  //         </nav>
  //       </div>
  //       <div className={styles.basket}>{/* button */}</div>
  //       <div className={styles.mobileNav}>
  //         <HamburgerIcon
  //           isToggled={toggled}
  //           onClick={toggle}
  //         />
  //         <div className={`${styles.bigNav} ${toggled ? "visible" : "hidden"}`}>
  //           <nav>
  //             <ol>
  //               <li></li>
  //             </ol>
  //           </nav>
  //         </div>
  //       </div>
  //     </div>
  //   );
}
