import React, { FC, MouseEventHandler } from 'react';
import { IoIosArrowDropup } from 'react-icons/io';
import css from './ScrollUp.module.css';

interface ScrollUpProps {
  onScrollBtn: MouseEventHandler<HTMLDivElement>;
}

const ScrollUp: FC<ScrollUpProps> = ({ onScrollBtn }) => {
  return (
    <div className={css.scrollUp} onClick={onScrollBtn}>
      <IoIosArrowDropup size='50'/>
    </div>
  );
}

export default ScrollUp;