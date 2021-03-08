/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-05 15:47:20
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-08 22:23:18
 */
import SearchForm from './components/SearchForm';
import Bar from './components/Bar';
import ResultForm from './components/ResultForm';

function App() {
  return (
    <div className="App">
      <div>
        <Bar />
      </div>
      <div style={{ paddingTop: '200px' }}>
        <SearchForm />
      </div>
      {/* <div>
        <ResultForm />
      </div> */}
    </div>
  );
}

export default App;
