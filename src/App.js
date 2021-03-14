/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-05 15:47:20
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-12 13:31:52
 */

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchForm from './components/SearchForm';
import Bar from './components/Bar';
import ResultForm from './components/ResultForm';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <div>
        <Bar />
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '60px',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <div>
          <SearchForm />
        </div>
        <div>
          <ResultForm />
        </div>
      </div>
    </div>
  );
}

export default App;
