import { useState } from 'react'
import './App.css'

type CardProps = {
  heading: string;
  description: string;
  isActive: boolean;
}

const Card = (props: CardProps) => {
  const { heading, description, isActive } = props;
  return (
    <div>
      <h3>{heading} {isActive ? "On" : "Not on"}</h3>
      <p>{description}</p>
    </div>
  )
}


function App() {
  console.log("Rendering app component");

  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  }
  return (
    <>
      <Card heading="This is a heading" description="This is a description" isActive={isActive} />

      <button onClick={toggleActive}>Toggle is isActive</button>
    </>
  )
}

export default App
