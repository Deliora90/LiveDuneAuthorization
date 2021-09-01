import React from "react";
import classnames from 'classnames';
import styles from "./Container.module.scss";

interface IContainerProps {
  className?: string;
}
const Container: React.FC<IContainerProps> = ({ className, children }) => {
  return (
    <div className={classnames(className, styles.container)}>
      {children}
    </div>
  )
}

export default Container;
