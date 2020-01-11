import { h } from 'preact'
import { useState } from 'preact/hooks'
import { getCharDetail, CharDetail } from '../api/api'
import charDetailRow from './char-detail-row'


const AlphabetInputBox = () => {
    const [text, setText] = useState('')
    return (
        <div>
            <input value={text} onInput={e => setText((e.target as HTMLInputElement).value)} data-cy="word-input"/>
            <table>
                { Array.from(text).map(charDetailRow) }
            </table>
        </div>
    )
}
export default AlphabetInputBox
