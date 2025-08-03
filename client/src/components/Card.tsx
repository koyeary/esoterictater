import React, { useState } from "react";
import { IMAGE_URLS, IMAGE_WIDTHS } from "../lib/constants";
import { animated, useSpring, Controller } from "react-spring";
import "./styles/Card.css";

interface CardProps {
  number: number;
}

const Card: React.FC<CardProps> = ({ number }) => {
  const [flipped, setFlipped] = useState<boolean>(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1000px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 1, tension: 500, friction: 80 },
  });

  const animations = new Controller({ opacity: 0 });
  const toggle = () => {
    animations.start({ opacity: flipped ? 0 : 1 });
    setFlipped(!flipped);
  };

  const { small } = IMAGE_WIDTHS;

  return (
    <div className="card flip-card" style={{ width: small }} onClick={toggle}>
      <animated.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "#f0f0f0",
          color: "#333",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backfaceVisibility: "hidden",
          opacity: opacity.to((o) => 1 - o),
          transform,
        }}
      >
        <img
          src={IMAGE_URLS[0].img}
          alt="Back of the Deck"
          style={{ width: small, height: "auto" }}
        />
      </animated.div>

      <animated.div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background: "#333",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backfaceVisibility: "hidden",
          opacity,
          transform: transform.to((t) => `${t} rotateY(180deg)`),
        }}
      >
        <img
          src={IMAGE_URLS[number].img}
          alt={IMAGE_URLS[number].title}
          style={{ width: small, height: "auto" }}
        />
      </animated.div>
    </div>
  );
};

export default Card;
