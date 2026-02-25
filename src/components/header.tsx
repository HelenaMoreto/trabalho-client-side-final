import { NavLink, useLocation } from "react-router-dom"


export function Header(){
    const { pathname } =  useLocation()
    const routeSelecionada = pathname

    const selecionadoCss = 'py-2 px-4 rounded-xl bg-cyan-700 text-zinc-50'

    return (
        <>
        <header className="w-[100%] h-[10vh] bg-blue-950 flex items-center justify-between fixed">
            <h1 className="text-3xl  text-cyan-50 px-[200px] font-medium ">Portal de Ferramentas</h1>
            <ul className="flex justify-center items-center gap-4 px-[200px]">
                <li className="text-cyan-50 "><NavLink to="/" className={`${routeSelecionada === '/' ? selecionadoCss : ''}`}>Home</NavLink></li>
                <li className="text-cyan-50 "><NavLink to="/connectHub" className={`${routeSelecionada === '/connectHub' ? selecionadoCss :''}`}>ConnectHub</NavLink> </li>
                <li className="text-cyan-50 "><NavLink to="/taskMaster" className={`${routeSelecionada === '/taskMaster' ? selecionadoCss : ''}`}>TaskMaster</NavLink></li>
                 <li className="text-cyan-50 "><NavLink to="/moneyFlow" className={`${routeSelecionada === '/moneyFlow' ? selecionadoCss : ''}`}>MoneyFlow</NavLink></li>
            </ul>
        </header>
        </>
    )
}