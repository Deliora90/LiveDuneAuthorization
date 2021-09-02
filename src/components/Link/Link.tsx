import React from "react";
import styles from "./Link.module.scss";
import classnames from 'classnames';

interface ILinkProps {
  href?: string;
  className?: string;
  Icon?: React.FC;
}

const Link: React.FC<ILinkProps> = ({ href, Icon, className, children }) => {
  return (
    <a href={href} >
      <div className={classnames(className, styles.link)}>
        {Icon && <Icon />}
        <p className={styles.text}>{children}</p>
      </div>
    </a>
  )
}

export default Link;
