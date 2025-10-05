import { Funcionario } from '../types'
import { Link } from 'react-router-dom'

type Props = {
  funcionarios: Funcionario[]
  onDelete: (id: number) => void
}

export default function EmployeeTable({ funcionarios, onDelete }: Props){
  return (
    <div className="overflow-x-auto bg-white rounded shadow">
      <table className="min-w-full divide-y">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm">ID</th>
            <th className="px-4 py-2 text-left text-sm">Nome</th>
            <th className="px-4 py-2 text-left text-sm">Cargo</th>
            <th className="px-4 py-2 text-left text-sm">Setor</th>
            <th className="px-4 py-2 text-left text-sm">Turno</th>
            <th className="px-4 py-2 text-right text-sm">Salário</th>
            <th className="px-4 py-2 text-center text-sm">Ações</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {funcionarios.map(f => (
            <tr key={f.id}>
              <td className="px-4 py-2">{f.id}</td>
              <td className="px-4 py-2">{f.nome}</td>
              <td className="px-4 py-2">{f.cargo}</td>
              <td className="px-4 py-2">{f.setor}</td>
              <td className="px-4 py-2">{f.turno}</td>
              <td className="px-4 py-2 text-right">R$ {f.salario.toLocaleString('pt-BR')}</td>
              <td className="px-4 py-2 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Link to={`/funcionarios/editar/${f.id}`} className="px-3 py-1 border rounded text-sm hover:bg-slate-100">Editar</Link>
                  <button onClick={()=> f.id && onDelete(f.id)} className="px-3 py-1 bg-red-500 text-white rounded text-sm hover:opacity-90">Excluir</button>
                </div>
              </td>
            </tr>
          ))}
          {funcionarios.length === 0 && (
            <tr><td colSpan={7} className="px-4 py-6 text-center text-slate-500">Nenhum funcionário encontrado.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
