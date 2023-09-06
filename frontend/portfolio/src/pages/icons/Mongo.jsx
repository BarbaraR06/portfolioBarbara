import * as React from "react";
import styles from "./IconStyles.module.css";

function IconMongodb(props) {
  return (
    <svg  className={styles.icon} fill="none" viewBox="0 0 15 15" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.869.162a.5.5 0 00-.738 0l-2.63 2.87a5.5 5.5 0 00-.271 7.115L7 13.673V15h1v-1.327l2.77-3.526a5.5 5.5 0 00-.27-7.114L7.869.163zM8 3a.5.5 0 00-1 0v7.5a.5.5 0 001 0V3z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default IconMongodb;