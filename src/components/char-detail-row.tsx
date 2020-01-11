import { h } from 'preact'
import { getCharDetail } from '../api/api'

const charDetailRow = (char: string) => {
    const detail = getCharDetail(char)
    return (
        <tr>
            <td>{detail.text}</td>
            <td>{detail.phonetic}</td>
            <td>{detail.alternate}</td>
        </tr>
    )
}
export default charDetailRow
