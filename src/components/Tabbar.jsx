import {React,useState} from 'react'
import { useNavigate} from 'react-router-dom'
import {HomeIcon,PencilIcon,UserIcon} from '@heroicons/react/24/outline'
import '../styles/Tabbar.less'

export default function Tabbar() {
    const [currentPage,setCurrentPage] = useState('home')

    const navigate = useNavigate()
    const handleClick = (to,currentPage)=>{
        navigate(to)
        setCurrentPage(currentPage)
    }
    
    return (
        <div className='Tabbar'>
            <HomeIcon className={`Tabbar-icon ${currentPage==='home'? 'color-theme-1':'color-theme-2'}`} onClick={()=>handleClick(`/`,'home')}/>
            <PencilIcon className={`Tabbar-icon ${currentPage==='article'? 'color-theme-1':'color-theme-2'}`} onClick={()=>handleClick(`/article`,'article')}/>
            <UserIcon className={`Tabbar-icon ${currentPage==='me'? 'color-theme-1':'color-theme-2'}`} onClick={()=>handleClick(`/me`,'me')}/>
        </div>
    )
}

