import {  HomeOutlined, PlusCircleOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useState } from 'react';

const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
    icon: <HomeOutlined />,
  },
  {
    label: 'Nova Oferta',
    key: 'newOffer',
    icon: <PlusCircleOutlined />,
  },
];


export function Header(){
    
    const [current, setCurrent] = useState('home');

    const onClick: MenuProps['onClick'] = e => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}