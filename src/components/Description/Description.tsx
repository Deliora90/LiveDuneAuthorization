import React from "react";
import classnames from 'classnames';
import styles from "./Description.module.scss";

interface IDescriptionProps{
  className?: string;
}

const Description: React.FC<IDescriptionProps> = ({ className, children }) => {
  return (
    <p className={classnames(className, styles.text)}>
      {children}
    </p>
  )
}

export default Description;
