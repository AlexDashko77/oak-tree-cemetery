import { FC, useState } from 'react'
import './input.sass'
import { IInput } from '../../interfaces/interfaces'
import { observer } from 'mobx-react-lite'

const Input:FC<IInput> = observer(({value, onChange}) => {

    const [string, setString] = useState(value)
    
    return (
        <input onChange={(e) => {
            setString(e.target.value)
            onChange(e.target.value)
        }} placeholder='123' value={string} className='input'/>
    )
})

export default Input