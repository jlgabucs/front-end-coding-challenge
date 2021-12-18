import React, { useState } from 'react'
import './Home.css'

function Home(){
    const [numberArray, setNumber] = useState({
        number: ''
    })

    const newArray = numberArray.number.split(',').map(number =>{
        parseInt(number)
        return number * 2
    })
    

    const handleChange = e => {
        const {id , value} = e.target
        
        setNumber(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

        return (
            <div className='container'>
                <img className="logo" src="/MRLOGO.png" alt="LOGO" width="50%" height="25%"/>
                <h1 className='title'>MediRecords Front-End Coding Challenge</h1>
                    <div className='childInput'>
                        <h3>Input</h3>
                        <br/>
                        <br/>
                        <br/>
                        <input type="text"
                            id="number"
                            placeholder='Enter numbers'
                            value={numberArray.number}
                            onChange={handleChange}
                            size="50"
                            >
                        </input>
                        <br/>

                    </div>

                    <div className='childOutput'>
                        <h3>Output</h3>
                        <br/>
                        <br/>
                        <br/>
                        <input type="text"
                            id="number"
                            placeholder='Output'
                            value={newArray}
                            size="50"
                            readOnly
                            >
                        </input>
                    </div>           
            </div>
        )
        }

export default Home