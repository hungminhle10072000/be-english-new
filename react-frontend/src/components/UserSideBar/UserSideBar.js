import React from 'react';
import * as FaIcons from 'react-icons/fa';
import {MdOndemandVideo} from 'react-icons/md'
import {GoBook} from 'react-icons/go'
import {FaAdversal} from 'react-icons/fa'

export const UserSideBar = [
  {
    title: 'Từ vựng',
    path: '/user/topic-vocabulary',
    icon: <FaAdversal color='black'/>,
    cName: 'nav-user-text'
  },
  {
    title: 'Ngữ pháp',
    path: '/admin/topic-vocabulary',
    icon: <GoBook color='black'/>,
    cName: 'nav-user-text'
  },
  {
    title: 'Khóa học',
    path: '/admin/grammar',
    icon: <MdOndemandVideo color='black'/>,
    cName: 'nav-user-text'
  }
];



