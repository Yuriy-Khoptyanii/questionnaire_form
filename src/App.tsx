import './App.scss';

import DesktopDisplay from './components/desktopDisplay/DesktopDisplay';
import MobileDisplay from './components/mobileDisplay/MobileDisplay';

function App() {
  return (
    <div className="app">
      <MobileDisplay />
      <DesktopDisplay />
      <div className="blueBack"></div>
      <div className="stain"></div>
    </div>
  );
}

export default App;
