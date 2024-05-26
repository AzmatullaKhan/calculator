import './Calculator.css'

export const Calculator=()=>{

    return(
        <div className='main-container'>
            <div className='calculator-background'>
                <div className='calculator-history'>
                    Standard Calculator
                    <img src={require('./images/history.png')} alt='history' className='calculator-historyImg' />
                </div>
                <div className='calculator-answer'></div>
                <div className='calculator-buttons' id='calculator_buttons'>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton'>%</button>
                        <button className='calculator-numberButton'>CE</button>
                        <button className='calculator-numberButton'>C</button> 
                        <button className='calculator-actionButton'><img src={require('./images/back.png')} className='calculator-clearImg' alt='clear'/></button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton'>1/x</button>
                        <button className='calculator-numberButton'>x^2</button>
                        <button className='calculator-numberButton'>√x</button>
                        <button className='calculator-actionButton'>÷</button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton'>7</button>
                        <button className='calculator-numberButton'>8</button>
                        <button className='calculator-numberButton'>9</button>
                        <button className='calculator-actionButton'>*</button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton'>4</button>
                        <button className='calculator-numberButton'>5</button>
                        <button className='calculator-numberButton'>6</button>
                        <button className='calculator-actionButton'>-</button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton'>1</button>
                        <button className='calculator-numberButton'>2</button>
                        <button className='calculator-numberButton'>3</button>
                        <button className='calculator-actionButton'>+</button>
                    </div>
                    <div style={{display:"flex",alignItems:"center", width:"376px", height:"65px"}}>
                        <button className='calculator-numberButton'>+/-</button>
                        <button className='calculator-numberButton'>0</button>
                        <button className='calculator-numberButton'>.</button>
                        <button className='calculator-actionButton' style={{backgroundColor:"#eaecec", color:"#000"}}>=</button>
                    </div>
                </div>
            </div>
        </div>
    )
}