import {  HomeOutlined, PlusCircleOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import './Header.css'
import { useLocation } from 'react-router-dom';

const items: MenuProps['items'] = [
  {
    label: ( <Link to="/">Home</Link>),
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: ( <Link to="/new-offer">Nova Oferta</Link>),
    key: 'new-offer',
    icon: <PlusCircleOutlined />,
  },
];

export function Header(){

    const location = useLocation().pathname.substring(1);
    const [current, setCurrent] = useState('');

    useEffect(()=>{
      if(location){
        setCurrent(location)
      }else{
        setCurrent('home')
      }
    },[])

    const onClick: MenuProps['onClick'] = e => {
      setCurrent(e.key);
    };
  
    return (
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
     )
}