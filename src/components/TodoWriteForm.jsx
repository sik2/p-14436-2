function TodoWriteForm({ hadleOnsubmit }) {
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
