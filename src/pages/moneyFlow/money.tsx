import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export function MoneyFlow() {

    const regrasDoFormulario = z.object({
        descricao: z
            .string()
            .min(3, "Mínimo 3 caracteres"),
        valor: z
            .number()
            .positive("O valor não pode ser zero ou negativo"),
    });

    type TypeForm = z.infer<typeof regrasDoFormulario>;

    const formulario = useForm<TypeForm>({
        resolver: zodResolver(regrasDoFormulario),
    });

    const [listaLancamentos, setListaLancamentos] = useState<TypeForm[]>([]);

    useEffect(() => {
        const dadosSalvos = localStorage.getItem("lancamentos");
        if (dadosSalvos) {
            setListaLancamentos(JSON.parse(dadosSalvos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("lancamentos", JSON.stringify(listaLancamentos));
    }, [listaLancamentos]);

    function enviarFormulario(camposDoFormulario: TypeForm) {
        setListaLancamentos((oldState) => [
            ...oldState,
            camposDoFormulario
        ]);

        formulario.reset();
    }

    const saldoTotal = listaLancamentos.reduce((acc, item) => {
        return acc + item.valor;
    }, 0);

    return (
        <div className='w-full h-screen flex flex-col justify-center items-center bg-gray-100'>

            <h1 className="text-3xl font-medium mb-4">Money Flow</h1>

            <h2 className="text-xl font-semibold mb-6 text-green-500">
                Saldo Total: R$ {saldoTotal.toFixed(2)}
            </h2>

            <div
                className={`w-full max-w-6xl flex ${
                    listaLancamentos.length > 0
                        ? 'justify-between items-start'
                        : 'justify-center items-center'
                    } gap-20`}
            >
                <form
                    className="bg-white w-[500px] min-h-[350px] rounded-2xl p-8 shadow"
                    onSubmit={formulario.handleSubmit(enviarFormulario)}
                >
                    <div>
                        <label className="font-medium">Descrição:</label>
                        <input
                            className="border border-gray-400 w-full h-10 rounded p-2 mt-1"
                            type="text"
                            {...formulario.register('descricao')}
                        />
                        {formulario.formState.errors.descricao && (
                            <span className="text-red-500 text-sm">
                                {formulario.formState.errors.descricao.message}
                            </span>
                        )}
                    </div>

                    <div className="mt-4">
                        <label className="font-medium">Valor:</label>
                        <input
                            className="border border-gray-400 w-full h-10 rounded p-2 mt-1"
                            type="number"
                            step="0.01"
                            {...formulario.register('valor', {
                                valueAsNumber: true
                            })}
                        />
                        {formulario.formState.errors.valor && (
                            <span className="text-red-500 text-sm">
                                {formulario.formState.errors.valor.message}
                            </span>
                        )}
                    </div>

                    <div className="flex justify-center gap-10 mt-12">
                        <button
                            type="submit"
                            className="bg-cyan-700 w-[180px] h-10 rounded text-white"
                        >
                            Adicionar
                        </button>

                        <button
                            type="button"
                            onClick={() => formulario.reset()}
                            className="bg-gray-500 w-[180px] h-10 rounded text-white"
                        >
                            Limpar
                        </button>
                    </div>
                </form>

                {listaLancamentos.length > 0 && (
                    <div className="w-[500px] space-y-4">
                        {listaLancamentos.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 rounded shadow"
                            >
                                <p><strong>Descrição:</strong> {item.descricao}</p>
                                <p><strong>Valor:</strong> R$ {item.valor.toFixed(2)}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}