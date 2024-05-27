import './Calculator.css'

export const Calculator=()=>{

    let value1=Number(0)
    let value2=Number(0)
    let divClicked=false
    let addClicked=false
    let subClicked=false
    let mulClicked=false

    window.addEventListener('beforeunload',(e)=>{
        e.preventDefault();
      })

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

    const clearAllClicked=()=>{
        window.location.reload()
    }

    const ceClicked=()=>{
        let answer_text=document.getElementById('calculator_answer').value
        document.getElementById('calculator_answer').value=""
        let ongoing_text=document.getElementById('calculator_ongoing_hidden').textContent
        let ongoing_symbol=ongoing_text.slice(ongoing_text.length-1)
        if((ongoing_symbol!=='+' && ongoing_symbol!=='-' && ongoing_symbol!=='÷' && ongoing_symbol!=='%' && ongoing_symbol!=='*')){
            document.getElementById('calculator_ongoing_hidden').textContent=ongoing_text.slice(0, answer_text.length+1)
        }

    }

    const cClicked=()=>{
        document.getElementById('calculator_ongoing_hidden').textContent=""
        document.getElementById('calculator_answer').value=""
        value1=0
        value2=0
        divClicked=false
        mulClicked=false
        subClicked=false
        addClicked=false
        document.getElementById('subtraction').className = "calculator-actionButton"
        document.getElementById('multiplication').className = "calculator-actionButton"
        document.getElementById('division').className = "calculator-actionButton"
        document.getElementById('addition').className = "calculator-actionButton"
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

    const divisionClicked=()=>{
        if(!divClicked){
            value1=Number(document.getElementById('calculator_answer').value)
            document.getElementById('calculator_answer').value=''
            divClicked=true
            document.getElementById('subtraction').className = "calculator-actionButton"
            document.getElementById('multiplication').className = "calculator-actionButton"
            document.getElementById('division').className = "calculator-actionButton-selected"
            document.getElementById('addition').className = "calculator-actionButton"
            value2=0
            document.getElementById('calculator_ongoing_hidden').textContent=value1+"÷"
        }
        else{

            let history_div=document.getElementById('calculator_history')
            let history_p=document.createElement('p')

            value2=Number(document.getElementById('calculator_answer').value)
            document.getElementById('calculator_answer').value=Number(value1)/Number(value2)
            divClicked=false
            document.getElementById('subtraction').className = "calculator-actionButton"
            document.getElementById('multiplication').className = "calculator-actionButton"
            document.getElementById('division').className = "calculator-actionButton"
            document.getElementById('addition').className = "calculator-actionButton"
            document.getElementById('calculator_ongoing_hidden').textContent=value1+"÷"+value2
            history_p.textContent=value1+" ÷ "+value2+" = "+(Number(value1)/Number(value2))
            history_div.appendChild(history_p)
            history_div.scrollTop=history_div.scrollHeight
            value1=0
            value2=0
        }
    }

    const additionClicked=()=>{
        if(!addClicked){
            value1=Number(document.getElementById('calculator_answer').value)
            document.getElementById('calculator_answer').value=''
            addClicked=true
            document.getElementById('subtraction').className = "calculator-actionButton"
            document.getElementById('multiplication').className = "calculator-actionButton"
            document.getElementById('division').className = "calculator-actionButton"
            document.getElementById('addition').className = "calculator-actionButton-selected"
            value2=0
            document.getElementById('calculator_ongoing_hidden').textContent=value1+"+"
        }
        else{

            let history_div=document.getElementById('calculator_history')
            let history_p=document.createElement('p')

            value2=document.getElementById('calculator_answer').value
            document.getElementById('calculator_answer').value=Number(value1)+Number(value2)
            addClicked=false
            document.getElementById('subtraction').className = "calculator-actionButton"
            document.getElementById('multiplication').className = "calculator-actionButton"
            document.getElementById('division').className = "calculator-actionButton"
            document.getElementById('addition').className = "calculator-actionButton"
            document.getElementById('calculator_ongoing_hidden').textContent=value1+"+"+value2
            history_p.textContent=value1+" + "+value2+" = "+(Number(value1)+Number(value2))
            history_div.appendChild(history_p)
            history_div.scrollTop=history_div.scrollHeight
            value1=0
            value2=0
        }
    }

    const subtractionClicked=()=>{
        if(!subClicked){
            value1=Number(document.getElementById('calculator_answer').value)
            document.getElementById('calculator_answer').value=''
            subClicked=true
            document.getElementById('subtraction').className = "calculator-actionButton-selected"
            document.getElementById('multiplication').className = "calculator-actionButton"
            document.getElementById('division').className = "calculator-actionButton"
            document.getElementById('addition').className = "calculator-actionButton"
            value2=0
            document.getElementById('calculator_ongoing_hidden').textContent=value1+"-"
        }
        else{

            let history_div=document.getElementById('calculator_history')
            let history_p=document.createElement('p')

            value2=document.getElementById('calculator_answer').value
            document.getElementById('calculator_answer').value=Number(value1)-Number(value2)
            subClicked=false
            document.getElementById('subtraction').className = "calculator-actionButton"
            document.getElementById('multiplication').className = "calculator-actionButton"
            document.getElementById('division').className = "calculator-actionButton"
            document.getElementById('addition').className = "calculator-actionButton"
            document.getElementById('calculator_ongoing_hidden').textContent=value1+"-"+value2
            history_p.textContent=value1+" - "+value2+" = "+(Number(value1)-Number(value2))
            history_div.appendChild(history_p)
            history_div.scrollTop=history_div.scrollHeight
            value1=0
            value2=0

        }
    }

    const multiplicationClicked=()=>{
        if(!mulClicked){
            value1=Number(document.getElementById('calculator_answer').value)
            document.getElementById('calculator_answer').value=''
            mulClicked=true
            document.getElementById('subtraction').className = "calculator-actionButton"
            document.getElementById('multiplication').className = "calculator-actionButton-selected"
            document.getElementById('division').className = "calculator-actionButton"
            document.getElementById('addition').className = "calculator-actionButton"
            value2=0
            document.getElementById('calculator_ongoing_hidden').textContent=value1+"*"
        }
        else{

            let history_div=document.getElementById('calculator_history')
            let history_p=document.createElement('p')

            value2=document.getElementById('calculator_answer').value
            document.getElementById('calculator_answer').value=Number(value1)*Number(value2)
            mulClicked=false
            document.getElementById('subtraction').className = "calculator-actionButton"
            document.getElementById('multiplication').className = "calculator-actionButton"
            document.getElementById('division').className = "calculator-actionButton"
            document.getElementById('addition').className = "calculator-actionButton"
            document.getElementById('calculator_ongoing_hidden').textContent=value1+"*"+value2
            history_p.textContent=value1+" * "+value2+" = "+(Number(value1)*Number(value2))
            history_div.appendChild(history_p)
            history_div.scrollTop=history_div.scrollHeight
            value1=0
            value2=0
        }
    }

    const equalClicked=()=>{

        let history_div=document.getElementById('calculator_history')
        let history_p=document.createElement('p')

        document.getElementById('calculator_ongoing_hidden').textContent=''
        document.getElementById('subtraction').className = "calculator-actionButton"
        document.getElementById('multiplication').className = "calculator-actionButton"
        document.getElementById('division').className = "calculator-actionButton"
        document.getElementById('addition').className = "calculator-actionButton"
        if(divClicked){
            value2=document.getElementById('calculator_answer').value
            document.getElementById('calculator_answer').value=Number(value1)/Number(value2)
            divClicked=false
            history_p.textContent=value1+" ÷ "+value2+" = "+(Number(value1)/Number(value2))
            history_div.appendChild(history_p)
            history_div.scrollTop=history_div.scrollHeight
        }
        if(addClicked){
            value2=document.getElementById('calculator_answer').value
            document.getElementById('calculator_answer').value=Number(value1)+Number(value2)
            addClicked=false
            history_p.textContent=value1+" + "+value2+" = "+(Number(value1)+Number(value2))
            history_div.appendChild(history_p)
            history_div.scrollTop=history_div.scrollHeight

        }
        if(subClicked){
            value2=document.getElementById('calculator_answer').value
            document.getElementById('calculator_answer').value=Number(value1)-Number(value2)
            subClicked=false
            history_p.textContent=value1+" - "+value2+" = "+(Number(value1)-Number(value2))
            history_div.appendChild(history_p)
            history_div.scrollTop=history_div.scrollHeight

        }
        if(mulClicked){
            value2=document.getElementById('calculator_answer').value
            document.getElementById('calculator_answer').value=Number(value1)*Number(value2)
            mulClicked=false
            history_p.textContent=value1+" * "+value2+" = "+(Number(value1)*Number(value2))
            history_div.appendChild(history_p)
            history_div.scrollTop=history_div.scrollHeight

        }
    }

    const negateClicked=()=>{
        value1=document.getElementById('calculator_answer').value
        document.getElementById('calculator_answer').value=-1*Number(value1)
    }

    const handleHistory=()=>{
        document.getElementById('calculator_history').className='calculator-history-holder'
    }

    const closeHistory=()=>{
        document.getElementById('calculator_history').className='calculator-history-holder-hidden'
    }

    return(
        <div className='main-container'>
            <div className='calculator-background'>
                <div className='calculator-history'>
                    Standard Calculator
                    <img src={require('./images/history.png')} alt='history' className='calculator-historyImg' onClick={handleHistory}/>
                </div>
                <div className='calculator-history-holder-hidden' id='calculator_history'>
                    <button className='history-close-button' onClick={closeHistory}>X</button>
                </div>
                <input type='number' className='calculator-answer' id='calculator_answer'/>
                <input type='text' className='calculator-answer-hidden' id='calculator_answer_hidden' />
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
                        <button className='calculator-actionButton' onClick={divisionClicked} id='division'>÷</button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton' onClick={sevenClicked}>7</button>
                        <button className='calculator-numberButton' onClick={eightClicked}>8</button>
                        <button className='calculator-numberButton' onClick={nineClicked}>9</button>
                        <button className='calculator-actionButton' onClick={multiplicationClicked} id='multiplication'>*</button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton' onClick={fourClicked}>4</button>
                        <button className='calculator-numberButton' onClick={fiveClicked}>5</button>
                        <button className='calculator-numberButton' onClick={sixClicked}>6</button>
                        <button className='calculator-actionButton' onClick={subtractionClicked} id='subtraction'>-</button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton' onClick={oneClicked}>1</button>
                        <button className='calculator-numberButton' onClick={twoClicked}>2</button>
                        <button className='calculator-numberButton' onClick={threeClicked}>3</button>
                        <button className='calculator-actionButton' onClick={additionClicked} id='addition'>+</button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton' onClick={negateClicked}>+/-</button>
                        <button className='calculator-numberButton' onClick={zeroClicked}>0</button>
                        <button className='calculator-numberButton' onClick={clearAllClicked}>Clear All</button>
                        <button className='calculator-actionButton' onClick={equalClicked} style={{backgroundColor:"#eaecec", color:"#000"}}>=</button>
                    </div>
                </div>
                <span className='calculator-ongoing' id='calculator_ongoing_hidden'></span>
            </div>
        </div>
    )
}