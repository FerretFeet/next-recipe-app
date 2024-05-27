"use client";

import RecipeCard from "@/components/composite/RecipeCard/RecipeCard";
import styles from "./Carousel.module.css";
import {
  IRecipe,
  testRecipe,
  testRecipe1,
  testRecipe2,
  testRecipe3,
} from "@/utils/interfaces";
import { useEffect, useRef, useState } from "react";

const useInterval = (
  callback: () => object | null | void,
  delay?: number | null
) => {
  const savedCallback = useRef<() => null | object | void>(() => null);
  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    if (delay !== null) {
      const interval = setInterval(() => savedCallback.current(), delay || 0);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [delay]);
};

const Card = ({
  content,
  idx,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  content: IRecipe;
  idx: number;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  let style = {};

  if (idx === 0) {
    style = {
      opacity: 0.4,
      position: "absolute",
      zIndex: 1,
      left: 0,
      top: 0,

      transform: "translateX(-40%) scale(0.8)",
    };
  }

  if (idx === 1) {
    style = { zIndex: 10, position: "relative" };
  }

  if (idx === 2) {
    style = {
      opacity: 0.4,
      position: "absolute",
      zIndex: 1,
      right: 0,
      top: 0,
      transform: "translateX(40%) scale(0.8)",
    };
  }

  return (
    <div
      className={styles.card}
      style={{ ...style }}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <RecipeCard recipe={content} />
    </div>
  );
};

export default function Carousel() {
  const list = [testRecipe, testRecipe1, testRecipe2, testRecipe3];
  const [arr, setArr] = useState(list.slice(0, 3));
  const [rest, setRest] = useState(list.slice(3));
  const [isScrolling, setIsScrolling] = useState(true);

  const updateArr = (idx?: number) => {
    const [a, b, c] = arr;
    if (idx === 0) {
      const lastRestItem = rest[rest.length - 1];
      const newArr = [lastRestItem, a, b];
      const newRest = [c, ...rest.slice(0, rest.length - 1)];
      console.log(`updating arr  ${newArr}`);
      console.log(`updating rest ${newRest}`);
      setArr(newArr);
      setRest(newRest);
    } else {
      const firstRestItem = rest[0];
      const newArr = [b, c, firstRestItem];
      const newRest = [...rest.slice(1), a];
      console.log(`updating arr  ${newArr}`);
      console.log(`updating rest ${newRest}`);

      setArr(newArr);
      setRest(newRest);
    }
  };

  useInterval(
    () => {
      console.log("updating carousel..");
      updateArr(2);
    },
    isScrolling ? 6000 : null
  );

  return (
    <div className={`${styles.container}`}>
      {arr.map((item, idx) => (
        <Card
          key={item.recipe_name + "c"}
          content={item}
          idx={idx}
          onClick={() => updateArr(idx)}
          onMouseEnter={() => setIsScrolling(false)}
          onMouseLeave={() => setIsScrolling(true)}
        />
      ))}
    </div>
  );
}
