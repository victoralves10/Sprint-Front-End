import React, { useEffect, useState } from 'react'
import { listarFuncionarios, deletarFuncionario } from '../services/api'
import EmployeeTable from '../components/EmployeeTable'
import { Funcionario } from '../types'
import { Link } from 'react-router-dom'

export default function EmployeeList(){
  const [funcs, setFuncs] = useState<Funcionario[]>([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState<string | null>(null)

  async function load(){
    try {
      setLoading(true)
      const data = await listarFuncionarios()
      setFuncs(data)
    } catch(e:any){
      setErr(e.message || 'Erro')
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{ load() }, [])

  async function handleDelete(id: number){
    if (!confirm('Excluir registro?')) return
    try {
      await deletarFuncionario(id)
      setFuncs(prev => prev.filter(p => p.id !== id))
    } catch(e){
      alert('Erro ao excluir')
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Lista de Funcionários</h2>
        <Link to="/funcionarios/novo" className="px-4 py-2 bg-teal-500 text-white rounded">Inserir novo</Link>
      </div>

      {loading ? <div>Carregando...</div> : err ? <div className="text-red-500">{err}</div> : (
        <EmployeeTable funcionarios={funcs} onDelete={handleDelete} />
      )}
    </div>
  )
}
