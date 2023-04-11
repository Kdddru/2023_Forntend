import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './page/Home';
import {About} from './page/about';
import { Story } from './page/Story';
import { Story2 } from './page/Story2';
import { Error } from './page/Error';


function App() {
  return (
    //Routes를 이용하여 컴포넌트와 주소를 연결하는 Route를 정리
    <Routes>
      <Route path='/' Component={Home}/*element={<Home/>}*//>
      <Route path='/about' Component={About}/>
      {/**<Story/> 컴포넌트를 만들어서, '/story' 주소로 연결
       */}
      {/** URL파라미터를 이요한 값 전달
      path의 주소에 값이 들어갈 공간에 이름 작성
      값은 브라우저에 주소창에 입력했을때 값이 들어감
       */}
      <Route path='/story/:value' Component={Story}/> {/**여기서 파라미터는 value이다 */}
      {/** story 복사해서 story2 
      URL 파라미터 name
      
      */}
      <Route path='/story2/:name' Component={Story2}/>

      {/**path에 *을 넣으면 지정된 주소 외에는 전부
      element로 연결된 컴포넌트가 출력된다
      위의 작성한 주소와 헷갈리지않게 아래에 두는 편
       */}
      <Route path='*' Component={Error}/>
    </Routes>
  );
}

export default App;
