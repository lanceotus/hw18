import React from 'react';
import './App.css';
import Header from "./components/Header";
import Main from "./components/MainDiv";
import Footer from "./components/Footer";

let logotext = 'Онлайн-обучение';

let menu = {
  "left": [
    {
      "menu_item_link": "index.html",
      "menu_item_text": "Главная"
    },
    {
      "menu_item_link": "courses.html",
      "menu_item_text": "Курсы"
    },
    {
      "menu_item_link": "schedule.html",
      "menu_item_text": "Расписание"
    }
  ],
  "right": [
    {
      "menu_item_link": "register.html",
      "menu_item_text": "Регистрация"
    },
    {
      "menu_item_link": "login.html",
      "menu_item_text": "Войти"
    }
  ]
};

let courses = [
  {
    "course_link": "course1.html",
    "course_name": "Backend разработчик на PHP",
    "start_date": "27.05.2019"
  },
  {
    "course_link": "course2.html",
    "course_name": "Web-разработчик на Python",
    "start_date": "29.07.2019"
  },
  {
    "course_link": "course3.html",
    "course_name": "Разработчик JavaScript",
    "start_date": "27.06.2019"
  },
  {
    "course_link": "course4.html",
    "course_name": "Разработчик Python",
    "start_date": "08.07.2019"
  },
  {
    "course_link": "course5.html",
    "course_name": "Разработчик C++",
    "start_date": "27.06.2019"
  },
  {
    "course_link": "course6.html",
    "course_name": "Android-разработчик. Продвинутый курс",
    "start_date": "27.06.2019"
  },
  {
    "course_link": "course7.html",
    "course_name": "Android-разработчик. Базовый курс",
    "start_date": "26.08.2019"
  },
];

let copyright = '© 2019 Роман Храповицкий';

export default class App extends React.Component{
  render() {
    return (
        <div className="App">
          <Header logotext={logotext} menu={menu}/>
          <Main courses={courses}/>
          <Footer copyright={copyright}/>
        </div>
    );
  }
}

