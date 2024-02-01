import styles from "./styles.module.css";

export const TableHeader: Component = () => {
  return (
    <thead>
      <tr>
        <th>
          m<span class={styles.medium}>on</span>
          <span class={styles.long}>day</span>
        </th>
        <th>
          tu<span class={styles.medium}>e</span>
          <span class={styles.long}>sday</span>
        </th>
        <th>
          w<span class={styles.medium}>ed</span>
          <span class={styles.long}>nesday</span>
        </th>
        <th>
          th<span class={styles.medium}>u</span>
          <span class={styles.long}>rsday</span>
        </th>
        <th>
          f<span class={styles.medium}>ri</span>
          <span class={styles.long}>day</span>
        </th>
        <th>
          sa<span class={styles.medium}>t</span>
          <span class={styles.long}>urday</span>
        </th>
        <th>
          su<span class={styles.medium}>n</span>
          <span class={styles.long}>day</span>
        </th>
      </tr>
    </thead>
  );
};
