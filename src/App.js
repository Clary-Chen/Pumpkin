import React, { Component } from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import HomeDrama from './pages/Home/HomeDrama'
import Article from './pages/Article'
import Me from './pages/Me'
import MeCalendar from './pages/Me/MeCalendar'
import Tabbar from './components/Tabbar'
import './styles/App.less'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Routes>
          {/* 1_Home Page */}
          <Route path='/' element={<Home/>}/>
          <Route path='/drama' element={<HomeDrama/>}/>
          {/* 2_Article Page */}
          <Route path='/article' element={<Article/>}/>
          {/* 3_Me Page */}
          <Route path='/me' element={<Me/>}/>
          <Route path='/me/calendar' element={<MeCalendar/>}/>
          {/* 重定向:若以上皆不匹配，則回首頁 */}
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
        {/* 導覽區--------------------------------------- */}
        <Tabbar/>
      </div>
    )
  }
}

