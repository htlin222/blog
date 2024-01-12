// @flow strict
import React from "react";
import styles from "./Meta.module.scss";

type Props = {
  date: string,
  title: string,
};

const Meta = ({ date }: Props) => (
  <div className={styles["meta"]}>
    <p className={styles["meta__date"]}>
      Published{" "}
      {new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}
    </p>
    <meta
      property="og:image"
      content="https://og-mlkgi530p-htlin222.vercel.app/api/blog?templateTitle=${title}"
    />
  </div>
);

export default Meta;
