import ReactDOM from 'react-dom';
import React, { useState, Suspense, lazy} from 'react';
import Home_page from './home_page'
import Create_training_set_jsx from './create_training_set';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navbar from './navbar.js';

import jquery from 'jquery';
import $ from 'jquery';



function QuizletPage() {
  let [quizletPageJsx, setQuizletPageJsx] = useState(Home_page())

  // $('#create_training_set_btn').on('click', () => {
  //   console.log('이게 된다고?')
  //   console.log(create_training_set)
  //   setQuizletPageJsx(create_training_set.create_training_set)
  // })

  console.log(quizletPageJsx)
  return quizletPageJsx
}

ReactDOM.render(
  <>
  

  <Router>
    <Navbar />
    <Switch>
      <Route path="/react/"><Home_page /></Route>
      <Route path="/create_training_set/"><Create_training_set_jsx /></Route>
    </Switch>
  </Router>
  </>
  ,
  document.getElementById('root')
);

function Home(){
  return (
    <div>
      이 곳은 홈 페이지 입니당.
    </div>
  );
}

function About() {
  return (
    <div>
      우리 사이트는 React를 편하게 사용하기 위해서 진입 장벽을 낮춰주는 사이트 입니다.
    </div>
  );
}

function Dashboard() {
  console.log('dashboard')
  return (
    <div style={{'color': 'blue'}}>
      이 곳은 질문을 하는 게시판 입니당.
    </div>
  );
}

