import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/home"
import { MoneyFlow } from "./pages/moneyFlow/money"
import { ConnectHub } from "./pages/connectHub/connect"
import { TaskMaster } from "./pages/taskMaster/task"
import { Header } from "./components/header"

export function App() {
    return (
        <>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/moneyFlow" element={<MoneyFlow/>} />
                    <Route path="/connectHub" element={<ConnectHub/>} />
                    <Route path="/taskMaster" element={<TaskMaster/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}