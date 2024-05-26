import './Calculator.css'

export const Calculator=()=>{

    let value1=Number(0)
    let value2=Number(0)

    // window.addEventListener('keydown', (e)=>{
    //     console.log(e.which)
    // })

    const zeroClicked=()=>{
        document.getElementById('calculator_answer').value=document.getElementById('calculator_answer').value+"0"
    }

    const oneClicked=()=>{
        document.getElementById('calculator_answer').value=document.getElementById('calculator_answer').value+"1"
    }

    const twoClicked=()=>{
        document.getElementById('calculator_answer').value=document.getElementById('calculator_answer').value+"2"
    }

    const threeClicked=()=>{
        document.getElementById('calculator_answer').value=document.getElementById('calculator_answer').value+"3"
    }

    const fourClicked=()=>{
        document.getElementById('calculator_answer').value=document.getElementById('calculator_answer').value+"4"
    }

    const fiveClicked=()=>{
        document.getElementById('calculator_answer').value=document.getElementById('calculator_answer').value+"5"
    }

    const sixClicked=()=>{
        document.getElementById('calculator_answer').value=document.getElementById('calculator_answer').value+"6"
    }

    const sevenClicked=()=>{
        document.getElementById('calculator_answer').value=document.getElementById('calculator_answer').value+"7"
    }

    const eightClicked=()=>{
        document.getElementById('calculator_answer').value=document.getElementById('calculator_answer').value+"8"
    }

    const nineClicked=()=>{
        document.getElementById('calculator_answer').value=document.getElementById('calculator_answer').value+"9"
    }

    const dotClicked=()=>{
        value1=Number(document.getElementById('calculator_answer').value)
        document.getElementById('calculator_answer').value=value1+(".")
    }

    const ceClicked=()=>{
        document.getElementById('calculator_answer').value=""
    }

    const cClicked=()=>{
        document.getElementById('calculator_answer').value=""
    }

    const clearClicked=()=>{
        let value_input=document.getElementById('calculator_answer').value
        document.getElementById('calculator_answer').value=value_input.slice(0, value_input.length-1)
    }

    const percentageClicked=()=>{
        value1=document.getElementById('calculator_answer').value;
        document.getElementById('calculator_answer').value=Number(value1)/100
        value1=Number(0)
    }

    const oneDividedxClicked=()=>{
        value2=document.getElementById('calculator_answer').value;
        document.getElementById('calculator_answer').value=1/Number(value2)
        value2=Number(0)
    }

    const squareClicked=()=>{
        value1=document.getElementById('calculator_answer').value;
        document.getElementById('calculator_answer').value=Number(value1)*Number(value1)
        value1=Number(0)
    }

    const squareRootClicked=()=>{
        value1=document.getElementById('calculator_answer').value;
        document.getElementById('calculator_answer').value=Math.sqrt(Number(value1))
        value1=Number(0)
    }
    

    // const divisionClicked=()=>{
    //     if(value1===0){
    //         value1=Number(document.getElementById('calculator_answer').value)
    //         document.getElementById('calculator_answer').value=''
    //         return -1
    //     }
    //     value2=Number(document.getElementById('calculator_answer').value)
    //     document.getElementById('calculator_answer').value=value1/value2
    //     value1=value1/value2
        
    // }

    return(
        <div className='main-container'>
            <div className='calculator-background'>
                <div className='calculator-history'>
                    Standard Calculator
                    <img src={require('./images/history.png')} alt='history' className='calculator-historyImg' />
                </div>
                <input type='number' className='calculator-answer' id='calculator_answer' step="10"/>
                <div className='calculator-buttons' id='calculator_buttons'>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton' onClick={percentageClicked}>%</button>
                        <button className='calculator-numberButton' onClick={ceClicked}>CE</button>
                        <button className='calculator-numberButton' onClick={cClicked}>C</button> 
                        <button className='calculator-actionButton' onClick={clearClicked}><img src={require('./images/back.png')} className='calculator-clearImg' alt='clear'/></button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton' onClick={oneDividedxClicked}>1/x</button>
                        <button className='calculator-numberButton' onClick={squareClicked}>x^2</button>
                        <button className='calculator-numberButton' onClick={squareRootClicked}>√x</button>
                        <button className='calculator-actionButton' >÷</button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton' onClick={sevenClicked}>7</button>
                        <button className='calculator-numberButton' onClick={eightClicked}>8</button>
                        <button className='calculator-numberButton' onClick={nineClicked}>9</button>
                        <button className='calculator-actionButton'>*</button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton' onClick={fourClicked}>4</button>
                        <button className='calculator-numberButton' onClick={fiveClicked}>5</button>
                        <button className='calculator-numberButton' onClick={sixClicked}>6</button>
                        <button className='calculator-actionButton'>-</button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton' onClick={oneClicked}>1</button>
                        <button className='calculator-numberButton' onClick={twoClicked}>2</button>
                        <button className='calculator-numberButton' onClick={threeClicked}>3</button>
                        <button className='calculator-actionButton'>+</button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton'>+/-</button>
                        <button className='calculator-numberButton' onClick={zeroClicked}>0</button>
                        <button className='calculator-numberButton' onClick={dotClicked}>.</button>
                        <button className='calculator-actionButton' style={{backgroundColor:"#eaecec", color:"#000"}}>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}