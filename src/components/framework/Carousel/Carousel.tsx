"use client";

import RecipeCard from "@/components/composite/RecipeCard/RecipeCard";
import { IRecipe } from "@/lib/utils/interfaces";
import { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

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
  big,
}: {
  content: IRecipe;
  idx: number;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  big: boolean;
}) => {
  let style = {};

  if (idx === 0) {
    style = {
      transform: "translateX(-120%)",
    };
  }

  if (idx === 1) {
  }

  if (idx === 2) {
    style = {
      transform: "translateX(120%)",
    };
  }

  return (
    <div className={styles.posContainer}>
      <div
        className={big ? styles.cardBig : styles.cardSmall}
        style={{ ...style }}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        key={`${idx}-${content.id}`}
      >
        <RecipeCard
          key={`${idx}-${content.id}`}
          recipe={content}
        />
      </div>
    </div>
  );
};

export default function Carousel(props: { recipes: IRecipe[]; big: boolean }) {
  const [arr, setArr] = useState(props.recipes.slice(0, 3));
  const [rest, setRest] = useState(props.recipes.slice(3));
  const [isScrolling, setIsScrolling] = useState(true);
  let counter = 0;

  const updateArr = (idx?: number) => {
    const [a, b, c] = arr;
    if (idx === 0) {
      const lastRestItem = rest[rest.length - 1];
      const newArr = [lastRestItem, a, b];
      const newRest = [c, ...rest.slice(0, rest.length - 1)];
      setArr(newArr);
      setRest(newRest);
    } else {
      const firstRestItem = rest[0];
      const newArr = [b, c, firstRestItem];
      const newRest = [...rest.slice(1), a];
      setArr(newArr);
      setRest(newRest);
    }
  };

  useInterval(
    () => {
      // console.log("updating carousel..");
      updateArr(2);
    },
    isScrolling ? 6000 : null
  );
  return (
    <div className={`${styles.container}`}>
      {arr.map((item, idx) => {
        if (idx === 1) {
          const link = `/recipe/id/${item.id}`;
          return (
            <Card
              key={`${counter}-${item.id}`}
              content={item}
              idx={idx}
              onClick={() => updateArr(idx)}
              onMouseEnter={() => setIsScrolling(false)}
              onMouseLeave={() => setIsScrolling(true)}
              big={props.big}
            />
          );
        }
        return (
          <Card
            key={`${counter}-${item.id}`}
            content={item}
            idx={idx}
            onClick={() => updateArr(idx)}
            onMouseEnter={() => setIsScrolling(false)}
            onMouseLeave={() => setIsScrolling(true)}
            big={props.big}
          />
        );
      })}
    </div>
  );
}
