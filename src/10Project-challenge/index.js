import React, { useState } from 'react'
import Square from './Square';
import Input from './Input';

const ProjectChanllenge10 = () => {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkColor, setIsDarkColor] = useState(true);
  return (
    <section>
      <Square 
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkColor={isDarkColor}
      />
      <Input
         colorValue={colorValue}
         setColorValue={setColorValue}
         setHexValue={setHexValue}
         isDarkColor={isDarkColor}
         setIsDarkColor={setIsDarkColor}
      />
    </section>
  )
}

export default ProjectChanllenge10
