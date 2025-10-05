export default function Footer(){
  return (
    <footer className="bg-white border-t mt-8">
      <div className="container mx-auto px-4 py-6 text-sm text-slate-600 flex justify-between">
        <div>Hospital das Clínicas — Sistema Acadêmico</div>
        <div>© {new Date().getFullYear()}</div>
      </div>
    </footer>
  )
}
