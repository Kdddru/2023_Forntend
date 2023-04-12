import './App.css';
import {Routes,Route} from 'react-router-dom';
import { Home } from './page/Home';
import {About} from './page/about';
import { Story } from './page/Story';
import { Story2 } from './page/Story2';
import { Error } from './page/Error';
import { Articles } from './page/Articles';
import { Article } from './page/Article';
import { HeaderLink } from './page/HeaderLink';
import { Layout } from './page/Layout';
import { NavigatePage } from './page/NavigatePage';
import { NaviStatePage } from './page/NaviStatePage';


function App() {
  return (
    <div>
      <HeaderLink/>
      {/**Routes를 이용하여 컴포넌트와 주소를 연결하는 Route를 정리*/}
      <Routes>
        <Route path='/' Component={Layout}>
          <Route index Component={Home}/*element={<Home/>}*//>
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

          {/** 관련페이지는 주소로 분류해서 사용하능 */}
          {/** 중첩라우터 Outlet 사용할것 */}
          <Route path='/articles' Component={Articles}>
            <Route path=':id' Component={Article}/>
          </Route>

          {/**navigate를 이용한 값 전달 
          NavigatePage.jsx 버튼을 클릭하면 이동하면서 값 전달
          NaviStatePage.jsx 전달 받은 값 출력
          */}

          <Route path='/navigate' Component={NavigatePage}/>
          <Route path='/navigate/state' Component={NaviStatePage}/>

          {/**path에 *을 넣으면 지정된 주소 외에는 전부
          element로 연결된 컴포넌트가 출력된다
          위의 작성한 주소와 헷갈리지않게 아래에 두는 편
          */}
          <Route path='*' Component={Error}/>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
