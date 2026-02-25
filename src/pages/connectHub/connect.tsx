import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

export function ConnectHub() {

    const regrasDoFormulario = z.object({
        nome: z.string().min(1, "Campo Obrigatório"),
        telefone: z.string().min(1, "Campo obrigatório").regex(/^\d+$/, "Telefone deve conter apenas números"),
        email: z.string().min(1, "Campo obrigatório").email("Email inválido"),
    })

    type TypeForm = z.infer<typeof regrasDoFormulario>

    const formulario = useForm<TypeForm>({
        resolver: zodResolver(regrasDoFormulario)
    })

    const [listaCadastro, setListaCadastro] = useState<TypeForm[]>([]);


    useEffect(() => {
        const dadosSalvos = localStorage.getItem("cadastros");

        if (dadosSalvos) {
            setListaCadastro(JSON.parse(dadosSalvos));
        }
    }, []);


    useEffect(() => {
        localStorage.setItem("cadastros", JSON.stringify(listaCadastro));
    }, [listaCadastro]);

    function enviarFormulario(camposDoFormulario: TypeForm) {
        setListaCadastro(oldState => [...oldState, camposDoFormulario])
        formulario.reset();
    }
    function excluirCadastro(index: number) {
        setListaCadastro(listaCadastro.filter((_, i) => i !== index));
    }

    return (
        <>
            <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100">
                <h1 className="text-3xl mb-8 font-medium">Fomulário de Cadastro</h1>
               <div className="flex justify-between items-center gap-8">
                 <form className="bg-white w-[600px] h-[500px] rounded-2xl p-8" onSubmit={formulario.handleSubmit(enviarFormulario)}>
                    <div>
                        <label className="font-medium">Nome:</label><br />
                        <input className="border-[1px] border-gray-400 w-[535px]  h-10 rounded-[6px]  p-2" type="text" {...formulario.register('nome')} />
                        {formulario.formState.errors.nome && (
                            <span className="text-red-500 ">{formulario.formState.errors.nome.message}</span>
                        )}
                    </div><br />

                    <div>
                        <label className="font-medium mt-4">Número:</label><br />
                        <input className="border-[1px] border-gray-400  w-[535px]  h-10 rounded-[6px] p-2" type="text" {...formulario.register('telefone')} />
                        {formulario.formState.errors.telefone && (
                            <span className="text-red-500">{formulario.formState.errors.telefone.message}</span>
                        )}
                    </div><br />

                    <div>
                        <label className="font-medium">Email:</label><br />
                        <input className="border-[1px] border-gray-400  w-[535px]  h-10 rounded-[6px] p-2" type="text" {...formulario.register('email')} />
                        {formulario.formState.errors.email && (
                            <span className="text-red-500">{formulario.formState.errors.email.message}</span>
                        )}
                    </div><br /><br />

                    <div className="flex justify-center items-center gap-5">
                        <button className="bg-cyan-700 w-[350px] h-10 rounded-[6px] text-white">Enviar</button>
                        <button className="bg-cyan-700 w-[350px] h-10 rounded-[6px] text-white" type="reset">Limpar</button>
                    </div>
                </form>

                <div>
                    {listaCadastro.length > 0 && listaCadastro.map((cadastro, index) => {
                        return (
                            <div key={index} className="mb-4 p-4 bg-white rounded shadow">
                                <p>Nome: {cadastro.nome}</p>
                                <p>Telefone: {cadastro.telefone}</p>
                                <p>Email: {cadastro.email}</p>

                                <button
                                    type="button"
                                    className="mt-2 bg-red-600 text-white px-4 py-1 rounded"
                                    onClick={() => excluirCadastro(index)}
                                >
                                    Excluir
                                </button>
                            </div>
                        )
                    })}
                </div>
               </div>
            </div>
        </>
    )
}

