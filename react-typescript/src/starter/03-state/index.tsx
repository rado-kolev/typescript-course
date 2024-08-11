import { useState } from 'react';

type Link = {
  id: number;
  url: string;
  text: string;
};

const navLinks: Link[] = [
  {
    id: 1,
    url: 'https://reactjs.org',
    text: 'react docs',
  },
  {
    id: 2,
    url: 'https://reactrouter.com',
    text: 'react router docs',
  },
  {
    id: 3,
    url: 'https://reacttraining.com',
    // remove text property to see the error
    text: 'react training',
  },
];

//* By default TS infers the type of the state
function Component() {
  const [text, setText] = useState('some text');

  //* If the type isn't provided, it's type 'never'
  const [list, setList] = useState<string[]>([]);

  const [links, setLinks] = useState(navLinks);

  return (
    <div>
      <h2 className='mb-1'>React & Typescript</h2>
      <button
        className='btn btn-center'
        onClick={() => {
          setText('new text'); //* works -> string expected
          // setText(5); //* does not work -> string expected

          setList(['hello', 'Typescript']);

          setLinks([...links, { id: 4, url: 'hello', text: 'hello' }]);
        }}
      >
        Click me
      </button>
    </div>
  );
}
export default Component;
