import { useState } from "react";
import HamburgerIcon from "../../base/HamburgerMenu/HamburgerIcon";
import styles from "./SiteHeader.module.css";
import SearchForm from "@/components/composite/SearchForm/SearchForm";

export function SiteHeader({ links }: { links: string[] }) {
  //   const [toggled, setToggled] = useState(false);
  //   console.log(links);

  //   const toggle = (event: React.MouseEvent) => {
  //     event.preventDefault();
  //     setToggled(!toggled);
  //   };

  return (
    <header className={styles.hamburgerMenu}>
      <div className={styles.logo}>
        <h5>EzG</h5>
      </div>
      <div className={`${styles.bigNav}`}>
        <nav>
          <SearchForm />
        </nav>
      </div>
      <div className={styles.basket}>{/* button */}</div>
    </header>
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
