import { FC } from 'react';

type Props = {
  name: string,
}


const NavButton: FC<Props> = ({ name }) => {
  return (
    <button className="button">
      {name}
    </button>
  );
};

export default NavButton;