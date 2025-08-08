import React, { useEffect, useState } from "react";

function TimerComponent() {
  useEffect(() => {
    console.log("⏱ Timer started");
    const timer = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("🧹 Timer cleaned up");
    };
  }, []);

  return <div>Timer is running... Check the console.</div>;
}

function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div>
      <button onClick={() => setShowTimer((prev) => !prev)}>
        {showTimer ? "Unmount Timer" : "Mount Timer"}
      </button>
      {showTimer && <TimerComponent />}
    </div>
  );
}

export default App;
