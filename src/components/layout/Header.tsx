import React from 'react';

type HeaderProps = {
  onClick: () => void
};

/**
 * React component for the Header Section.
 */
export const Header = (props: HeaderProps) => {
  return (
    <header className="header">
      <h1>
        Sucky<span className="header__group-one">Do</span><span className="header__group-two">Do</span>
      </h1>
      <h2 onClick={props.onClick}>
        New Game
      </h2>
    </header>
  )
}
