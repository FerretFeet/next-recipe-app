"use client";

import {
  IRecipe,
  testRecipe,
  testRecipe1,
  testRecipe2,
  testRecipe3,
  testRecipe4,
  testRecipe5,
} from "@/utils/interfaces";
import styles from "./MinorCarousel.module.css";
import { ListrecipeCard } from "@/components/composite/ListRecipeCard/ListRecipeCard";
import { useState } from "react";

const Card = ({
  content,
  idx,
  onClick,
}: {
  content: IRecipe;
  idx: number;
  onClick?: () => void;
}) => {
  let style = {};

  //   if (idx === 0) {
  //     style = {
  //       opacity: 0.4,
  //       position: "absolute",
  //       zIndex: 1,
  //       left: 0,
  //       top: 0,

  //       transform: "translateX(-40%) scale(0.8)",
  //     };
  //   }

  //   if (idx === 1) {
  //     style = { zIndex: 10, position: "relative" };
  //   }

  //   if (idx === 2) {
  //     style = {
  //       opacity: 0.4,
  //       position: "absolute",
  //       zIndex: 1,
  //       right: 0,
  //       top: 0,
  //       transform: "translateX(40%) scale(0.8)",
  //     };
  //   }

  return (
    <div
      className={styles.card}
      style={{ ...style }}
      onClick={onClick}
      key={`${idx}-${content.id}`}
    >
      <ListrecipeCard
        recipe={content}
        key={`${idx}-${content.id}`}
      />
    </div>
  );
};

export function MinorCarousel() {
  const list = [
    testRecipe,
    testRecipe1,
    testRecipe2,
    testRecipe3,
    testRecipe4,
    testRecipe5,
  ];
  const [arr, setArr] = useState(list.slice(0, 5));
  const [rest, setRest] = useState(list.slice(5));

  const updateArr = (idx?: number) => {
    const [a, b, c, d, e] = arr;
    if (idx === 0) {
      const lastRestItem = rest[rest.length - 1];
      const newArr = [lastRestItem, a, b, c, d];
      const newRest = [e, ...rest.slice(0, rest.length - 1)];
      console.log(`updating arr  ${newArr}`);
      console.log(`updating rest ${newRest}`);
      setArr(newArr);
      setRest(newRest);
    } else {
      const firstRestItem = rest[0];
      const newArr = [b, c, d, e, firstRestItem];
      const newRest = [...rest.slice(1), a];
      console.log(`updating arr  ${newArr}`);
      console.log(`updating rest ${newRest}`);

      setArr(newArr);
      setRest(newRest);
    }
  };

  return (
    <div className={styles.container}>
      {arr.map((item, idx) => (
        <Card
          key={`${idx}-${item.id}`}
          content={item}
          idx={idx}
        />
      ))}
      <button
        onClick={() => updateArr(2)}
        className={`${styles.arrow} ${styles.right}`}
      ></button>
      <button
        onClick={() => updateArr(0)}
        className={`${styles.arrow} ${styles.left}`}
      ></button>
    </div>
  );
}
