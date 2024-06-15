import styles from "./index.module.css";
import { useContext, useRef } from "react";
import { globalContext } from "../../App";

// alternativa:
// export default function ChildComponent({ setValue }) {}
export default function ChildComponent() {
  const { setValue } = useContext(globalContext);

  const inputEl = useRef();

  const handleClick = () => {
    setValue(inputEl.current.value);
  };

  return (
    <div className={styles.childComponent}>
      <h3>child component</h3>
      <input ref={inputEl} type="text" placeholder="change value here" />
      <button onClick={handleClick}>change</button>
    </div>
  );
}
