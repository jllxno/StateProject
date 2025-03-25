import React from 'react'

export const TimeCounter = () => {
    const [seconds, setSeconds] = useState(0); // Estado para los segundos
    const intervalRef = useRef(null); // Referencia para almacenar el intervalo
  
    const startCounter = () => {
      if (!intervalRef.current) { // Evita múltiples intervalos
        intervalRef.current = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
      }
    };
  
    const stopCounter = () => {
      clearInterval(intervalRef.current); // Detiene el intervalo
      intervalRef.current = null; // Limpia la referencia
      setSeconds(0); // Reinicia el contador
    };
  
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Contador: {seconds} segundos</h1>
        <button onClick={startCounter} style={{ marginRight: '10px' }}>Iniciar</button>
        <button onClick={stopCounter}>Parar</button>
      </div>
    );
  };
