import { recursosPlanejados } from './content';

export default function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold">Data Intelligence Platform</h1>
        <p className="mt-4 text-slate-300">
          Plataforma que pretende combinar análise de dados, IA e machine learning para
          insights estratégicos.
        </p>
        <p role="status" className="mt-4 rounded border border-amber-500/40 bg-amber-500/10 p-3 text-amber-200">
          Projeto em estágio inicial: os recursos abaixo estão planejados e ainda não foram
          implementados.
        </p>
        <h2 className="mt-8 text-xl font-semibold">Recursos planejados</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {recursosPlanejados.map((r) => (
            <li key={r.titulo} className="rounded border border-slate-800 p-4">
              <h3 className="font-medium">{r.titulo}</h3>
              <p className="text-sm text-slate-400">{r.descricao}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
