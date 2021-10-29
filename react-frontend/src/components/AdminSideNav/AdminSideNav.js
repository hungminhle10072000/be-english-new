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
    title: 'Quản lí chương học',
    path: `/admin/chapter/${-1}`,
    icon: <FaIcons.FaUserFriends />,
    cName: 'nav-text'
  },
  {
    title: 'Quản lí bài học',
    path: `/admin/lesson/${-1}`,
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



