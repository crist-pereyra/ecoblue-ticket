import './App.css';
import TicketGrid from './comps/TicketGrid';
import Title  from './comps/Title';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Title />
      <div className="container">
        <TicketGrid />
      </div>
    </GlobalProvider>
  );
}

export default App;
