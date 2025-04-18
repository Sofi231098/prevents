import React, { FC } from "react";
import styles from "./section-container.module.css";

interface SectionContainerProps {
  title: string;
  children: React.ReactNode;
}

export const SectionContainer: FC<SectionContainerProps> = ({
  title,
  children,
}) => {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
