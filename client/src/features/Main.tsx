import React from "react";

interface CardProps {
  title: string;
  description: string;
}

interface MainProps {
  card: CardProps;
}

const Main: React.FC<MainProps> = ({ card }) => {
  return (
    <div>
      <h1>{card.title}</h1>
      <p>{card.description}</p>
    </div>
  );
};

export default Main;
