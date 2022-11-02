import React from 'react';
import { Button } from '../TYPES/Button';
import NavButton from './NavButton';

const buttons: Button[] = [
  {name: 'all'},
  {name: 'for you' },
  {name: 'yours'},
];

const Navigation = () => {
  return (
    <div className="navigation">
      {buttons.map(button => (
        <NavButton name={button.name} />
      ))}
    </div>
  );
};

export default Navigation;