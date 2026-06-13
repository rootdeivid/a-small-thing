import { useState, useRef, useEffect } from 'react'
import './App.css'
import dorohedoroImg from './assets/Dorohedoro Character Sheet.jfif'
import rightImg from './assets/and-you-ought-to-tell-me-that-v0-mar9k3b9zlyd1.webp'
import music1 from './assets/Peach Pit - Shampoo Bottles (Official Video) - PeachPitVEVO (youtube).mp3'
import music2 from './assets/Bruno Major - Nothing (Lyric & Chord Video) - Bruno Major (youtube).mp3'

const songs = [
  { src: music1, label: 'Peach Pit — Shampoo Bottles' },
  { src: music2, label: 'Bruno Major — Nothing' },
]

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const audioRef = useRef(null)
  const [musicStarted, setMusicStarted] = useState(false)
  const [autoplayBlocked, setAutoplayBlocked] = useState(false)
  const [songIndex, setSongIndex] = useState(0)

  const playCurrent = useRef(false)

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      audio.volume = 0.4
      audio.play()
        .then(() => setMusicStarted(true))
        .catch(() => setAutoplayBlocked(true))
    }
  }, [])

  useEffect(() => {
    if (playCurrent.current && audioRef.current) {
      audioRef.current.play()
    }
  }, [songIndex])

  const handleEnded = () => {
    playCurrent.current = true
    setSongIndex((prev) => (prev + 1) % songs.length)
  }

  const startMusic = () => {
    if (audioRef.current && !musicStarted) {
      playCurrent.current = true
      audioRef.current.play()
      setMusicStarted(true)
      setAutoplayBlocked(false)
    }
  }

  const toggleCard = () => {
    if (!isOpen) {
      setIsOpen(true)
      startMusic()
    } else {
      setIsOpen(false)
    }
  }

  return (
    <div className="app-container">
      {/* Florais decorativos flutuantes */}
      <div className="flower" style={{ top: '3%', left: '2%', animationDuration: '11s' }}>🌹</div>
      <div className="flower" style={{ top: '7%', right: '4%', animationDelay: '1.2s', animationDuration: '13s' }}>🌷</div>
      <div className="flower" style={{ top: '15%', left: '12%', animationDelay: '3s', animationDuration: '10s' }}>🌸</div>
      <div className="flower" style={{ top: '25%', right: '10%', animationDelay: '0.5s', animationDuration: '14s' }}>🌺</div>
      <div className="flower" style={{ top: '35%', left: '4%', animationDelay: '4.2s', animationDuration: '9s' }}>🌷</div>
      <div className="flower" style={{ top: '45%', right: '2%', animationDelay: '2s', animationDuration: '12s' }}>🌹</div>
      <div className="flower" style={{ top: '55%', left: '8%', animationDelay: '5.5s', animationDuration: '11s' }}>🌸</div>
      <div className="flower" style={{ top: '62%', right: '7%', animationDelay: '1.8s', animationDuration: '13s' }}>🌺</div>
      <div className="flower" style={{ top: '73%', left: '3%', animationDelay: '3.7s', animationDuration: '10s' }}>🌹</div>
      <div className="flower" style={{ top: '82%', right: '3%', animationDelay: '4.8s', animationDuration: '12s' }}>🌷</div>
      <div className="flower" style={{ top: '91%', left: '10%', animationDelay: '2.3s', animationDuration: '14s' }}>🌸</div>
      <div className="flower" style={{ top: '96%', right: '8%', animationDelay: '6s', animationDuration: '9s' }}>🌺</div>

      {/* Pétalas caindo */}
      <div className="petal" style={{ left: '5%', animationDelay: '0s', animationDuration: '8s' }}>🌸</div>
      <div className="petal" style={{ left: '15%', animationDelay: '2s', animationDuration: '10s' }}>🌸</div>
      <div className="petal" style={{ left: '25%', animationDelay: '4s', animationDuration: '7s' }}>🌷</div>
      <div className="petal" style={{ left: '40%', animationDelay: '1s', animationDuration: '11s' }}>🌸</div>
      <div className="petal" style={{ left: '55%', animationDelay: '3s', animationDuration: '9s' }}>🌺</div>
      <div className="petal" style={{ left: '65%', animationDelay: '5s', animationDuration: '8s' }}>🌸</div>
      <div className="petal" style={{ left: '78%', animationDelay: '2.5s', animationDuration: '10s' }}>🌷</div>
      <div className="petal" style={{ left: '90%', animationDelay: '4.5s', animationDuration: '7.5s' }}>🌸</div>
      <div className="petal" style={{ left: '35%', animationDelay: '6s', animationDuration: '12s' }}>🌺</div>
      <div className="petal" style={{ left: '70%', animationDelay: '1.5s', animationDuration: '9s' }}>🌸</div>

      {/* Carta */}
      <div className={`card-wrapper ${isOpen ? 'is-open' : ''}`} onClick={toggleCard}>
        {/* Página esquerda — fixa, sempre visível */}
        <div className="page-left">
          <div className="page-left-content">
            <div className="img-circle">
              <img
                src={dorohedoroImg}
                alt="Dorohedoro"
                className="img-circle-content"
              />
            </div>
            <div className="ornament">❀</div>
            <p className="left-quote">"And you were always there in those beautiful memories."</p>
            <p className="left-author">— Himmel</p>
          </div>
        </div>

        <div className="page-right">
          <div className="page-right-inner">
            <div className="page-front">
              <div className="cover-content">
                <div className="wax-seal">
                  <span className="seal-icon">🌸</span>
                </div>
                <h1 className="cover-title">Com carinho,</h1>
                <p className="cover-sub">para Aline</p>
                <div className="img-circle img-circle--small">
                  <img
                    src={rightImg}
                    alt=""
                    className="img-circle-content"
                  />
                </div>
                <div className="cover-divider">〜 ✿ 〜</div>
                <p className="cover-hint">clique para abrir</p>
                <div className="cover-corner tl">❀</div>
                <div className="cover-corner tr">❀</div>
                <div className="cover-corner bl">❀</div>
                <div className="cover-corner br">❀</div>
              </div>
            </div>

            <div className="page-back">
              <div className="message-content">
                <p className="message-date">12 de Junho de 2026</p>
                <h2 className="message-greeting">Querida Peppa,</h2>
                <div className="message-body">
                  <p>
                    Se eu pudesse definir você em um termo,<br />
                    seria "marcante".<br />
                    Eu lembro das piadinhas,<br />
                    da sessão da enciclopédia dos mais derivados assuntos,<br />
                    da história de Sakura Cardcaptor,<br />
                    de Sailormoon,<br />
                    do seu incômodo com lofi-hip-hop e Joji (isso quando não eram os dois juntos),<br />
                    da sua capacidade incrível de lembrar o nome de um ator, seja qual for,<br />
                    do jeito que você contava com carinho sobre andar de mãos dadas,<br />
                    e mesmo que tenha dito pra eu não te julgar,<br />
                    eu achei a coisa mais fofa.<br />
                    Sou grato por ter te conhecido,<br />
                    e por poder sempre ver uma versão nova a cada vez que te encontro.<br />
                    Obrigado por hoje e pelas boas memórias.
                  </p>
                  <p>
                    Isso está longe de ser uma carta de amor,<br />
                    e sim um testemunho de que você existe em mim,<br />
                    um sentimento além de uma intitulação que eu possa nomear.
                  </p>
                  <div className="dorohedoro-callout">
                    <p className="nikaido">NIKAIDOOOOOOO</p>
                    <p className="kaiman-cite">— Kaiman</p>
                  </div>
                  <p className="message-signoff">
                    Com carinho,<br />
                    <span className="signoff-name">Deivid</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Música */}
      <div className="music-area">
        <audio ref={audioRef} src={songs[songIndex].src} onEnded={handleEnded} />
        {autoplayBlocked && !musicStarted ? (
          <button className="play-btn" onClick={startMusic}>
            <span className="play-btn-icon">▶</span>
            <span className="play-btn-label">Tocar música</span>
          </button>
        ) : (
          <>
            <div className="music-label">🎵</div>
            <p className="music-caption">🎧 {songs[songIndex].label}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default App
