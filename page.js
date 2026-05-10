export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 text-white p-4">
      <div className="max-w-md mx-auto bg-zinc-800 rounded-3xl shadow-2xl p-5 space-y-5">
        <div className="text-center space-y-2">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-yellow-400 to-yellow-700 flex items-center justify-center text-black text-2xl font-black shadow-2xl">
            KB
          </div>

          <h1 className="text-3xl font-black tracking-wide">
            KO-BUD PREMIUM
          </h1>

          <p className="text-zinc-400 text-sm">
            Mobilny kalkulator wycen
          </p>
        </div>

        <div className="bg-black rounded-3xl p-5 border border-zinc-700">
          <h2 className="text-xl font-bold mb-4">Funkcje aplikacji</h2>

          <ul className="space-y-2 text-zinc-300">
            <li>✅ Wyceny usług budowlanych</li>
            <li>✅ Liczenie materiałów</li>
            <li>✅ Transport i narzut</li>
            <li>✅ Rabaty dla klientów</li>
            <li>✅ Podpis klienta</li>
            <li>✅ Mobilna wersja pod telefon</li>
            <li>✅ Gotowa pod Vercel</li>
          </ul>
        </div>

        <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-black py-4 rounded-2xl font-black text-lg shadow-2xl">
          KO-BUD APP
        </button>
      </div>
    </main>
  );
}
