import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      <p className="date">{format(now, 'EEEE, MMMM do yyyy')}</p>
      <p className="time">{format(now, 'hh:mm:ss a')}</p>
    </div>
  );
}

export default App;