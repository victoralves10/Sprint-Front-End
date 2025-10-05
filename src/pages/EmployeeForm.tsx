import React, { useEffect, useState } from 'react'
import { Funcionario } from '../types'
import { criarFuncionario, obterFuncionario, atualizarFuncionario } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'

export default function EmployeeForm(){
  const { id } = useParams<{ id?: string }>()
  const navigate = useNavigate()
  const [loadError, setLoadError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState<Funcionario>({
    nome: '',
    cargo: '',
    setor: '',
    turno: '',
    salario: 0
  })

  useEffect(()=>{
    if (id) {
      setLoading(true)
      obterFuncionario(Number(id))
        .then((data) => setForm(data))
        .catch(()=> setLoadError('Não foi possível carregar o funcionário'))
        .finally(()=> setLoading(false))
    }
  }, [id])

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: name === 'salario' ? Number(value) : value }))
  }

  async function onSubmit(e: React.FormEvent){
    e.preventDefault()
    if (!form.nome.trim() || !form.cargo.trim()) {
      alert('Preencha nome e cargo')
      return
    }
    try {
      if (id) {
        await atualizarFuncionario(Number(id), form)
        navigate('/funcionarios')
      } else {
        await criarFuncionario(form)
        navigate('/funcionarios')
      }
    } catch (err) {
      alert('Erro ao salvar')
    }
  }

  return (
    <div className="bg-white p-6 rounded shadow max-w-2xl">
      <h2 className="text-xl font-semibold mb-4">{id ? 'Editar Funcionário' : 'Novo Funcionário'}</h2>

      {loading ? <div>Carregando...</div> : loadError ? <div className="text-red-500">{loadError}</div> : (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nome</label>
            <input name="nome" value={form.nome} onChange={onChange} className="mt-1 block w-full rounded border px-3 py-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Cargo</label>
              <input name="cargo" value={form.cargo} onChange={onChange} className="mt-1 block w-full rounded border px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium">Setor</label>
              <input name="setor" value={form.setor} onChange={onChange} className="mt-1 block w-full rounded border px-3 py-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Turno</label>
              <select name="turno" value={form.turno} onChange={onChange} className="mt-1 block w-full rounded border px-3 py-2">
                <option value="">Selecione</option>
                <option>Diurno</option>
                <option>Noturno</option>
                <option>Integral</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Salário (R$)</label>
              <input name="salario" type="number" value={form.salario} onChange={onChange} className="mt-1 block w-full rounded border px-3 py-2" />
            </div>
          </div>

          <div className="flex gap-3">
            <button type="submit" className="px-4 py-2 bg-teal-500 text-white rounded">Salvar</button>
            <button type="button" onClick={()=> navigate('/funcionarios')} className="px-4 py-2 border rounded">Cancelar</button>
          </div>
        </form>
      )}
    </div>
  )
}
