import styles from './layout.module.css';

import { ReactElement } from 'react';

import { Navigation } from 'components/layout/navigation/navigation';

interface LayoutProps {
  children: ReactElement;
}

export const Layout = (props: LayoutProps) => {
  return (
    <div className={styles.root}>
      <main>{props.children}</main>
      <footer>
        <Navigation />
      </footer>
    </div>
  );
};
