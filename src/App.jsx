import { useState } from "react";
import { createContext } from "react";
import "./App.css";
import ParentComponent from "./components/ParentComponent/ParentComponent";

// Creazione del contesto
export const globalContext = createContext();

function App() {
  const [value, setValue] = useState("Pippo");

  const globalObj = {
    setValue,
  };

  return (
    // Wrappo tutta la mia applicazione con il contesto
    // Mettendo a disposizione a tutta la mia app globalObj
    // che all'interno passa setValue
    <globalContext.Provider value={globalObj}>
      <div>
        <h1>test app</h1>
        {/* l'atlernativa con passaggio prop:
        <ParentComponent setValue={setValue} />
        */}
        <ParentComponent />
        <p>Variable value: {value}</p>
        <p>Dentro APP.JSX</p>
      </div>
    </globalContext.Provider>
  );
}

export default App;
