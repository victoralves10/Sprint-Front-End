import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="space-y-8">
      <section className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Hospital das Clínicas — Notícias</h2>
          <p className="text-slate-600">Bem-vindo ao sistema de cadastro. Nesta página você encontra informações institucionais e notícias fictícias para o trabalho.</p>
          <article className="mt-4 flex gap-4">
            <img src="/hospital.jpg" alt="hospital" className="w-40 h-28 object-cover rounded" />
            <div>
              <h3 className="font-semibold">Nova ala de emergência</h3>
              <p className="text-sm text-slate-600">A nova ala passa por adaptações para ampliar atendimento e reduzir tempo de espera. (matéria fictícia)</p>
            </div>
          </article>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold mb-2">Acesso rápido</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/funcionarios" className="text-teal-600 hover:underline">Lista de Funcionários</Link></li>
            <li><Link to="/funcionarios/novo" className="text-teal-600 hover:underline">Cadastrar novo funcionário</Link></li>
          </ul>
        </div>
      </section>
    </div>
  )
}
