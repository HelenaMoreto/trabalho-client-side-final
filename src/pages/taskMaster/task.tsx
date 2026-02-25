import { zodResolver } from '@hookform/resolvers/zod';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export function TaskMaster() {

  const regrasDoFormulario = z.object({
    titulo: z.string().min(5, "Mínimo 5 caracteres"),
    categoria: z.string().min(5, "Mínimo 5 Caracteres"),
  })

  type BaseForm = z.infer<typeof regrasDoFormulario>

  type TypeForm = BaseForm & {
    concluida: boolean
  }

  const formulario = useForm<BaseForm>({
    resolver: zodResolver(regrasDoFormulario)
  })

  const [listaTarefas, setListaTarefas] = useState<TypeForm[]>([]);

  // 🔥 Carregar do localStorage
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("tarefas");
    if (dadosSalvos) {
      setListaTarefas(JSON.parse(dadosSalvos));
    }
  }, []);

  // 🔥 Salvar sempre que mudar
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(listaTarefas));
  }, [listaTarefas]);

  function enviarFormulario(camposDoFormulario: BaseForm) {

    const novaTarefa: TypeForm = {
      ...camposDoFormulario,
      concluida: false
    }

    setListaTarefas(oldState => [...oldState, novaTarefa])
    formulario.reset();
  }

  function excluirTarefa(index: number) {
    setListaTarefas(listaTarefas.filter((_, i) => i !== index))
  }

  function marcarComoConcluida(index: number) {
    setListaTarefas(listaTarefas.map((tarefa, i) =>
      i === index
        ? { ...tarefa, concluida: !tarefa.concluida }
        : tarefa
    ))
  }

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center bg-gray-100'>
      <h1 className='text-3xl mb-8 font-medium'>To Do List</h1>
      <div
        className={`w-full max-w-6xl flex ${listaTarefas.length > 0
            ? "justify-between items-start"
            : "justify-center items-center"
          } gap-20`}
      >
        <form
          className="bg-white w-[500px] min-h-[350px] rounded-2xl p-8 shadow"
          onSubmit={formulario.handleSubmit(enviarFormulario)}
        >
          <div>
            <label className="font-medium">Título:</label>
            <input
              className="border border-gray-400 w-full h-10 rounded p-2 mt-1"
              type="text"
              {...formulario.register("titulo")}
            />
            {formulario.formState.errors.titulo && (
              <span className="text-red-500 text-sm">
                {formulario.formState.errors.titulo.message}
              </span>
            )}
          </div>

          <div className="mt-4">
            <label className="font-medium">Categoria:</label>
            <select
              className="border border-gray-400 w-full h-10 rounded p-2 mt-1 bg-white"
              {...formulario.register("categoria")}
            >
              <option value="">Selecione uma categoria</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Pessoal">Pessoal</option>
              <option value="Urgente">Urgente</option>
            </select>
            {formulario.formState.errors.categoria && (
              <span className="text-red-500 text-sm">
                {formulario.formState.errors.categoria.message}
              </span>
            )}
          </div>
          <div className="flex justify-center gap-10 mt-12">
            <button
              type="submit"
              className="bg-cyan-700 w-[180px] h-10 rounded text-white"
            >
              Enviar
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

        {listaTarefas.length > 0 && (
          <div className="w-[500px] space-y-4">
            {listaTarefas.map((tarefa, index) => (
              <div
                key={index}
                className={`p-4 rounded shadow transition ${tarefa.concluida
                    ? "bg-gray-300 line-through text-gray-600"
                    : "bg-white"
                  }`}
              >
                <p><strong>Título:</strong> {tarefa.titulo}</p>
                <p><strong>Categoria:</strong> {tarefa.categoria}</p>

                <div className="flex gap-3 mt-3">
                  <button
                    type="button"
                    onClick={() => marcarComoConcluida(index)}
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    {tarefa.concluida ? "Desfazer" : "Concluir"}
                  </button>

                  <button
                    type="button"
                    onClick={() => excluirTarefa(index)}
                    className="bg-red-600 text-white px-3 py-1 rounded"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}