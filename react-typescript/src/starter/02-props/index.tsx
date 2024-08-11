import { type PropsWithChildren } from 'react';

//* Using optional prop children
// type ComponentProps = {
//   name: string,
//   id: number,
//   children?: React.ReactNode, //* Optional prop
// }


//* Using PropsWithChildren
type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

//* Inline
// function Component({ name, id }: { name: string, id: number }) {


//* Using type
function Component({ name, id, children }: ComponentProps) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>ID: {id}</h1>
      {children} {/* Optional children prop */}
    </div>
  );
}
export default Component;
