import React from 'react';
import reactlogo from './content/react.svg';
import { Greeter } from './components/Greeter';

export function App() {
    return <Greeter src={reactlogo} message={"Hello to the World"} />;
}