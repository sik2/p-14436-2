import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './pages/Form'
import List from './pages/List'
import Main from './pages/Main'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Main />}></Route>
                <Route path="/list/:id" element={<List />}></Route>
                <Route path="/new" element={<Form />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
