import { h } from 'preact'
import charDetailRow from './char-detail-row'

const AlphabetTable = () => {
    return (
        <div>
        <h1>test</h1>
        <table>
        {
        Array.from({ length: 26 }, (_, i) => String.fromCharCode('A'.charCodeAt(0) + i))
            .map(charDetailRow)
        }
        </table>
        </div>
    )
}

export default AlphabetTable
