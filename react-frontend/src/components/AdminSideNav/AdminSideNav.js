import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const AdminSideNav = [
  {
    title: 'Quản lí tài khoản',
    path: '/admin/account',
    icon: <FaIcons.FaUserFriends />,
    cName: 'nav-text'
  },
  {
    title: 'Quản lí khoá học',
    path: '/admin/course',
    icon: <FaIcons.FaUserFriends />,
    cName: 'nav-text'
  },
  {
    title: 'Đăng xuất',
    path: '/',
    icon: <FaIcons.FaSignOutAlt />,
    cName: 'nav-text'
  }
];



