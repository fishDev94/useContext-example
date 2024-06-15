import styles from "./index.module.css";
import ChildComponent from "../ChildComponent/ChildComponent";
// alternativa:
// export default function ParentComponent({ setValue })
export default function ParentComponent() {
  return (
    <div className={styles.parentComponent}>
      <h2>Parent component</h2>
      {/* alternativa:
      <ChildComponent setValue={setValue} />
      */}
      <ChildComponent />
    </div>
  );
}
