import React, {useState, useEffect} from 'react'
// UseEffectは第二引数を[]にすると一度だけ実行
const BasicUseEffect = () => {
    const [count, setCount] = useState(0)
    const [item, setItem] = useState('')
    useEffect(() => {
        console.log("useEffect ")
    }, [count])
    return (
        <>
          <button onClick={() => setCount(prevCount=>prevCount+1)}>Click {count}</button>
          <input type='text' value={item} onChange={evt=>setItem(evt.target.value)}/>
        </>
        )
}

export default BasicUseEffect