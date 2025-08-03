import { useEffect, useState } from "react";
import { IMAGE_URLS } from "./lib/constants";
import "./App.css";
import Card from "./components/Card";
import { animated, useSpring, useTransition } from "react-spring";

function App() {
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const spring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1500 },
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * IMAGE_URLS.length);
    if (randomIndex === 0) {
      setSelectedCard(1); // Make sure not to select the back of the deck
    } else {
      setSelectedCard(randomIndex);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <animated.div style={spring}>
          <Card number={selectedCard} />
        </animated.div>
      </header>
      {/*       <h1 style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        {transitions((style, item) => (
          <animated.span style={style} className="pick-a-card">
            {item}
          </animated.span>
        ))}
      </h1> */}
    </div>
  );
}

export default App;
