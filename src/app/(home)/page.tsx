import styles from "./page.module.css";
import Billboard from "@/components/home/Billboard/Billboard";

export default function Home() {
  return (
    <div className={styles.home}>
      <Billboard></Billboard>
      MAIN
    </div>
  );
}
