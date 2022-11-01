import React from 'react';
import { Button } from '../TYPES/Button';
import NavButton from './NavButton';

const buttons: Button[] = [
  {name: 'unsorted'},
  {name: 'recommended' },
  {name: 'current'},
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