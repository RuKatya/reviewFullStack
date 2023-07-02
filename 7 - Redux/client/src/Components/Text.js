import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addText, selectText, deleteText } from '../features/text/textSlice'

const Text = () => {
    const dispatch = useDispatch()
    const text = useSelector(selectText)
    console.log(text)

    const handleForm = (e) => {
        e.preventDefault()

        const text = e.target.elements.text.value

        console.log(text)

        dispatch(addText(text))
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" name="text" placeholder='text' />
                <button type="submit">Send</button>
            </form>

            <div>{text.map((i, index) => {
                return (
                    <div key={index}>
                        <p>{i}</p>
                        <button onClick={() => {
                            dispatch(deleteText(index))
                        }}>delete</button>
                    </div>
                )
            })}</div>
        </div>
    )
}

export default Text