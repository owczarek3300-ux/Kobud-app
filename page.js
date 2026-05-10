
export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#111',
      color: 'white',
      padding: '20px',
      fontFamily: 'Arial'
    }}>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        background: '#1f1f1f',
        borderRadius: '25px',
        padding: '25px'
      }}>
        <h1 style={{fontSize:'32px', fontWeight:'bold'}}>
          KO-BUD PREMIUM
        </h1>

        <p>Mobilny kalkulator wycen budowlanych</p>

        <div style={{
          marginTop:'20px',
          padding:'20px',
          background:'#000',
          borderRadius:'20px'
        }}>
          <h2>Funkcje aplikacji:</h2>

          <ul>
            <li>✔ Wyceny usług</li>
            <li>✔ Liczenie materiałów</li>
            <li>✔ Transport i narzut</li>
            <li>✔ Mobilna aplikacja</li>
          </ul>
        </div>

        <button style={{
          marginTop:'20px',
          width:'100%',
          padding:'15px',
          borderRadius:'15px',
          border:'none',
          background:'#d4a017',
          color:'black',
          fontWeight:'bold',
          fontSize:'18px'
        }}>
          KO-BUD APP
        </button>
      </div>
    </main>
  )
}
