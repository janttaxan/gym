import styles from './navigation.module.css';

interface NavigationProps {}

export const Navigation = (props: NavigationProps) => {
  return <nav className={styles.root}>Navigation</nav>;
};
