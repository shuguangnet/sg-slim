import React from 'react';

export interface FooProps {
  title?: string;
}

const Foo: React.FC<FooProps> = ({ title }) => {
  return <div>{title}</div>;
};

export default Foo;