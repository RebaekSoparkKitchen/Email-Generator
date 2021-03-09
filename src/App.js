/*
 * @Description:
 * @Author: FlyingRedPig
 * @Date: 2021-03-05 15:47:20
 * @LastEditors: FlyingRedPig
 * @LastEditTime: 2021-03-09 17:38:09
 */
import SearchForm from './components/SearchForm';
import Bar from './components/Bar';
import ResultForm from './components/ResultForm';
import axios from 'axios';

const handleSearch = async () => {
  const obj = { title: 'a', body: 'b' };
  const { data: post } = await axios.post('/api/test', obj);
  console.log(post);
};

function App() {
  return (
    <div className="App">
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
          <SearchForm search={handleSearch} />
        </div>
        <div>
          <ResultForm />
        </div>
      </div>
    </div>
  );
}

export default App;
