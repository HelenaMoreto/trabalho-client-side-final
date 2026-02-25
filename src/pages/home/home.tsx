import { NavLink } from "react-router-dom";


export function Home(){

    return (
        <>
        <div className="flex flex-col justify-center items-center w-full h-screen relativeborder-2 border-amber-500 z-10 ">
              <h1 className="text-cyan-950 text-3xl font-bold">Conheça nossas ferramentas</h1>
              <div className="relative m-10 flex gap-8  ">
                <div className="w-[300px] h-[220px] bg-gray-100 left-1 rounded-2xl relative">
                  <span className="text-3xl left-4 top-4 absolute">📱</span>
                  <h2 className="font-bold text-3xl absolute left-4 top-12">Connecthub</h2>
                  <p className="absolute left-4 top-18 text-gray-400">________________________________________</p>
                  <p className="absolute left-4 top-24 text-gray-700">Conheça nossa ferramenta de Cadastro de contato</p>
                  <button className="bg-blue-950 p-2 w-22 rounded-2xl border-double text-white absolute left-4 top-38"><NavLink to={'/connectHub'}>Conhecer</NavLink></button>
                </div>
                <div className="w-[300px] h-[220px] bg-gray-100 left-1  rounded-2xl relative">
                    <span className="text-3xl left-4 top-4 absolute">📑</span>
                  <h2 className="font-bold text-3xl absolute left-4 top-12">TaskMaster</h2>
                  <p className="absolute left-4 top-18 text-gray-400">________________________________________</p>
                  <p className="absolute left-4 top-24 text-gray-700">Conheça nossa to do list</p>
                  <button className="bg-blue-950 p-2 w-22 rounded-2xl border-double text-white absolute left-4 top-38"><NavLink to={'/taskMaster'}>Conhecer</NavLink></button>
                
                </div>
                <div className="w-[300px] h-[220px]  bg-gray-100 left-1 rounded-2xl relative">
                    <span className="text-3xl left-4 top-4 absolute">💶</span>
                  <h2 className="font-bold text-3xl absolute left-4 top-12">MoneyFlow</h2>
                  <p className="absolute left-4 top-18 text-gray-400">________________________________________</p>
                  <p className="absolute left-4 top-24 text-gray-700">Conheça nossa ferramenta de Controle de Gastos</p>
                  <button className="bg-blue-950 p-2 w-22 rounded-2xl border-double text-white absolute left-4 top-38"><NavLink to={'/moneyFlow'}>Conhecer</NavLink></button>
                
                </div>
              </div>
        </div>
       </>
    )
}