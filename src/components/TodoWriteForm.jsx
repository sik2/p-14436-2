import { useTodos } from '../context/TodoContext'

function TodoWriteForm() {
    const { addTodo } = useTodos()
    const hadleOnsubmit = (e) => {
        e.preventDefault()
        const form = e.target
        addTodo(form.todo.value)
    }

    return (
        <>
            <form onSubmit={hadleOnsubmit}>
                <input type="text" name="todo" />
                <button>입력</button>
            </form>
        </>
    )
}

export default TodoWriteForm
