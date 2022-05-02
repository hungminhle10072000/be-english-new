import React from 'react';
import * as FaIcons from 'react-icons/fa';
import {MdOndemandVideo} from 'react-icons/md'
import {GoBook} from 'react-icons/go'
import {FaAdversal} from 'react-icons/fa'
import {GiPrayer} from 'react-icons/gi'
import {AiTwotoneHome} from 'react-icons/ai'
export const UserSideBar = [
  {
    title: 'Trang chủ',
    path: '/user/home',
    icon: <AiTwotoneHome color='black'/>,
    cName: 'nav-user-text'
  },
  {
    title: 'Từ vựng',
    path: '/user/topic-vocabulary',
    icon: <FaAdversal color='black'/>,
    cName: 'nav-user-text'
  },
  {
    title: 'Ngữ pháp',
    path: '/user/grammar',
    icon: <GoBook color='black'/>,
    cName: 'nav-user-text'
  },
  {
    title: 'Khóa học',
    path: '/user/courses/0',
    icon: <MdOndemandVideo color='black'/>,
    cName: 'nav-user-text'
  },
  {
    title: 'Bài tập',
    path: '/user/exercise',
    icon: <GiPrayer color='black'/>,
    cName: 'nav-user-text'
  }
];



