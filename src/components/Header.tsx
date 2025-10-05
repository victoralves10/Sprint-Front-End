import { Link } from 'react-router-dom'
export default function Header(){
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">HC</div>
          <div>
            <h1 className="text-lg font-semibold">Hospital das Clínicas</h1>
            <p className="text-sm text-slate-500">Sistema de Cadastro de Funcionários</p>
          </div>
        </Link>

        <nav className="flex gap-4">
          <Link to="/" className="text-slate-600 hover:text-slate-900">Início</Link>
          <Link to="/funcionarios" className="text-slate-600 hover:text-slate-900">Funcionários</Link>
        </nav>
      </div>
    </header>
  )
}
