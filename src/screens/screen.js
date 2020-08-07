import React, { useState, useEffect, Fragment } from 'react';
import './style.css';

const WORD_LIST = ["APPLE", "HEAD", "PLACE", "SPACE", "HELP"]

function ScreenComponent(){
    const [character, setCharacter] = useState("") 
    const [allMatchedKeys, addAllMatchedKeys] = useState([]) 

    useEffect(() => {
        const characterCount = character.length
        let matchedKey = ""

        if (characterCount === 4 || characterCount === 5) {
            WORD_LIST.forEach(item => {
                if (item === character) {
                    matchedKey = character
                    setCharacter("")
                }
            })

            if (matchedKey) {
                addAllMatchedKeys([...allMatchedKeys, matchedKey])
            }

            if(characterCount === 5 && !matchedKey) {
                setCharacter("")
                alert("Invalid Word! Please try again :)")
            }
        }
    }, [character])
    return(
        <Fragment>
                 <h1>
                        Give me Five
                    </h1>
                    <div className="l-b-y">
                        <div className="l-b-r"></div>
                    </div>
           <div className="container">
            <div className="grid-container">
                <button className="grid-item" onClick={() => setCharacter(character + "P")}>P</button>
                <button className="grid-item" onClick={() => setCharacter(character + "L")}>L</button>
                <button className="grid-item" onClick={() => setCharacter(character + "P")}>P</button>
                <button className="grid-item" onClick={() => setCharacter(character + "T")}>T</button>
                <button className="grid-item" onClick={() => setCharacter(character + "S")}>S</button>
                <button className="grid-item" onClick={() => setCharacter(character + "A")}>A</button>
                <button className="grid-item" onClick={() => setCharacter(character + "C")}>C</button>
                <button className="grid-item" onClick={() => setCharacter(character + "E")}>E</button>
                <button className="grid-item" onClick={() => setCharacter(character + "H")}>H</button>
                <button className="grid-item" onClick={() => setCharacter(character + "D")}>D</button>

            </div>
            <br/>
            {allMatchedKeys.map(item => (
                    <div className="decoration-row mt-2">
                        <div>
                            <h2 style={{  letterSpacing: 3, marginBottom: 2 }}>{item}</h2>
                            {item.length === 5 ? <h2 style={{ letterSpacing: 1 }}>_ _ _ _ _</h2> : <h2 style={{ letterSpacing: 1 }}>_ _ _ _</h2>}
                        </div>
                        <div className="len"> 
                            <p>{item.length}</p>
                        </div>
                    </div>
                ))}
           </div>
        </Fragment>
    )
}

export default ScreenComponent;