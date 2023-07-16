import React from 'react'
import { Swiper } from 'antd-mobile'
import {useNavigate} from 'react-router-dom'
import '../../styles/Home.less'

export default function Home() {
  const navigate = useNavigate()
  const imgs = ['00','01','02','03','10']
  const items = imgs.map((imgNum, index) => (
    <Swiper.Item key={index} className='Home-Swiper-item'>
      <img src={require(`../../images/carousel/${imgNum}.png`)} width={'140px'}/>
    </Swiper.Item>
  ))

  const handleClick=()=>{
    navigate(`/drama`)
  }
  return (
    <div className='Home'>
      <div className='Home-Header'>
        PumpKin南記
      </div>
      <Swiper loop autoplay className='Home-Swiper'>
        {items}
      </Swiper>
      <div className='Home-Mid'>
        <div className='Home-Mid-1'>我的快樂</div>
        <div className='Home-Mid-2'>
          <img src={require('../../images/hello.png')} onClick={()=>{handleClick()}}/>
          <img src={require('../../images/hello.png')}/>
          <img src={require('../../images/hello.png')}/>
          <img src={require('../../images/hello.png')}/>
        </div>
      </div>

      <div className='Home-Mid'>
        <div className='Home-Mid-1'>我的快樂</div>
        <div className='Home-Mid-2'>
          <img src={require('../../images/hello.png')} onClick={()=>{handleClick()}}/>
          <img src={require('../../images/hello.png')}/>
          <img src={require('../../images/hello.png')}/>
          <img src={require('../../images/hello.png')}/>
        </div>
      </div>

      <div className='Home-Mid'>
        <div className='Home-Mid-1'>我的快樂</div>
        <div className='Home-Mid-2'>
          <img src={require('../../images/hello.png')} onClick={()=>{handleClick()}}/>
          <img src={require('../../images/hello.png')}/>
          <img src={require('../../images/hello.png')}/>
          <img src={require('../../images/hello.png')}/>
        </div>
      </div>

      <div className='Home-Mid'>
        <div className='Home-Mid-1'>我的快樂</div>
        <div className='Home-Mid-2'>
          <img src={require('../../images/hello.png')} onClick={()=>{handleClick()}}/>
          <img src={require('../../images/hello.png')}/>
          <img src={require('../../images/hello.png')}/>
          <img src={require('../../images/hello.png')}/>
        </div>
      </div>
      
      <div className='Home-Mid'>
        <div className='Home-Mid-1'>我的快樂</div>
        <div className='Home-Mid-2'>
          <img src={require('../../images/hello.png')} onClick={()=>{handleClick()}}/>
          <img src={require('../../images/hello.png')}/>
          <img src={require('../../images/hello.png')}/>
          <img src={require('../../images/hello.png')}/>
        </div>
      </div>
    </div>
  )
}
