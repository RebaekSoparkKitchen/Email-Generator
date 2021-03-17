/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-05 15:47:20
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-17 15:14:30
 */

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
