import React from "react";
import "./SecretCode.css"
import "./SecretCode.js"
import { useCornify } from 'use-cornify';

const SecretCode = () => {
  const { remove } = useCornify({
    keys: ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'],
    showCupCakeButton: true,
    addMagicalWords: true,
    younicorns: '12,957,826,716,386'
  })
  return (
    <div
      style={{
        fontFamily: 'arial, verdana, sans-serif',
        margin: '20vmin auto',
        textAlign: 'center',
      }}>
      <h1>Unicorns & Rainbows!</h1>
      <button onClick={() => remove()}>Remove Unicorns</button>
    </div>
  )

}
export default SecretCode
