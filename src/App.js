import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Router';
import ParticaleBackgraound from './Components/ParticaleBackgraound';

function App() {

  return (
    <div className='flex justify-center' >
      {/* <ParticaleBackgraound /> */}
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  );
}

export default App;
