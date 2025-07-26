import './App.css'; // 전체 앱 스타일 import
import Cover from './Firstpage/firstcover'; // 첫 화면(커버) 컴포넌트 import
// import NAVPage from './Secondpage/NAVPage'; // 네비게이션 페이지 컴포넌트 import
import SetInfo from './Settingpage/Infopage'; // 사용자 정보 입력 페이지 import
import TodayFortune from './Fortune/TodayFortune'; // 오늘의 운세 페이지 import
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // 라우팅 관련 import
// import Sharepage from './Sharepage/Shraepage';
import Map from './TravelRecommend/Mappage'; // 여행지 추천 페이지 import
import Main from './jaemin/Mainpage'; // 메인 페이지(jaemin's) import
import TravelWriter from './jaemin/TravelWriter'; // 여행 기록 작성 페이지 import
import BlogList from './jaemin/BlogList';

function App() {
  return (
    <div className="App">
      {/* 전체 페이지 배경 */}
      <div className="FirstPage-Background">
        <BrowserRouter>
          <Routes>
            {/* 초기 페이지 */}
            <Route path="/" element={<Cover />} />
            {/* 네비게이션 페이지 */}
            {/* <Route path="/NAV" element={<NAVPage />} /> */}
            {/* 사용자 정보 입력 페이지 */}
            <Route path='/User' element={<SetInfo/>}/>
            {/* 오늘의 운세 페이지 */}
            <Route path='/TodaysFortune' element={<TodayFortune/>}/>
            {/* 공유 페이지 */}
            {/* <Route path='/Sharepage' element={<Sharepage/>}/> */}
            {/* 여행지 추천 페이지 */}
            <Route path='/Mappage' element={<Map/>}/>
            {/* 메인 페이지(jaemin's) */}
            <Route path='/Mainpage' element={<Main/>}/>
            <Route path='/Mainpage/write' element={<TravelWriter/>}/>
            <Route path='/Mainpage/bloglist' element={<BlogList/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;