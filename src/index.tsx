import { render, h } from 'preact'
import TodoList from './components/todo-list'
import AlphabetTable from './components/alphabet-table'
import AlphabetInputBox from './components/alphabet-input-box'

render(
  <div>
    <TodoList />
    <AlphabetTable/>
    <AlphabetInputBox/>
  </div>,
  document.querySelector('#root')
)
