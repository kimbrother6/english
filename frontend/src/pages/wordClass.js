import '../static/word/class-home.css'
import '../static/word/flip.css'

import {useEffect, useState} from 'react'
import { ClassWordsData, SaveEditWordData } from 'server'

import getCookie from '../server/getCookie'
import $ from 'jquery'

let nowClass
let isEditWordInputCard = false

function WordClass(props) {
  nowClass = props.match.params.WordClass
  const [classData, setclassData] = useState(['noData'])
  const [editInputId, seteditInputId] = useState(null)

  useEffect(() => {
    ClassWordsData()
      .then((classWordsData) => {
        setclassData(classWordsData)
        //flip을 구현하기 위해서
        $('.flip-container .flipper').on('click', flip)

        let eventData = {
          words: classWordsData,
          seteditInputId: seteditInputId,
          setclassData: setclassData
        }
        $('.edit-btn').on('click', eventData, editBtnClickEvent)
        $('.speaker_btn').on('click', {words: classWordsData}, Speaker_btn_event)
        })
  }, [])
  return <> 
<head><script src="{% static 'word/responsiveVoice.js' %}"></script><script defer src="{% static 'word/class-home.js' %}"></script></head>
<section class="page-elem">
<br/>
  <div id="class-title-container">
    <h1 id="class-title">{nowClass}</h1>
  </div>

  <div class="body-top">

    <nav id='vertical-nav'>
      <div class="learn">
        <div class="vertical-nav-title">학습하기</div>

        <a href="#" class="mode-a-tag" width='150px'>
          <div class="mode-block">
            <svg xmlns="http://www.w3.org/2000/svg" class="vertical-nav-icon" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"/>
            </svg>
            <span class="mode-name"> 낱말카드</span>
          </div>
        </a>

        <a href="#" class="mode-a-tag">
          <div class="mode-block">
            <svg xmlns="http://www.w3.org/2000/svg" class="vertical-nav-icon" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
              <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
            </svg>
            <span class="mode-name"> 학습하기</span>
          </div>
        </a>

        <a href="#" class="mode-a-tag">
          <div class="mode-block">
            <svg xmlns="http://www.w3.org/2000/svg" class="vertical-nav-icon" fill="currentColor" viewBox="0 0 16 16">
              <path d="M6 0a.5.5 0 0 1 .5.5V3h3V.5a.5.5 0 0 1 1 0V3h1a.5.5 0 0 1 .5.5v3A3.5 3.5 0 0 1 8.5 10c-.002.434-.01.845-.04 1.22-.041.514-.126 1.003-.317 1.424a2.083 2.083 0 0 1-.97 1.028C6.725 13.9 6.169 14 5.5 14c-.998 0-1.61.33-1.974.718A1.922 1.922 0 0 0 3 16H2c0-.616.232-1.367.797-1.968C3.374 13.42 4.261 13 5.5 13c.581 0 .962-.088 1.218-.219.241-.123.4-.3.514-.55.121-.266.193-.621.23-1.09.027-.34.035-.718.037-1.141A3.5 3.5 0 0 1 4 6.5v-3a.5.5 0 0 1 .5-.5h1V.5A.5.5 0 0 1 6 0zM5 4v2.5A2.5 2.5 0 0 0 7.5 9h1A2.5 2.5 0 0 0 11 6.5V4H5z"/>
            </svg>
            <span class="mode-name"> 주관식</span>
          </div>
        </a>

        <a href="#" class="mode-a-tag">
          <div class="mode-block">
            <svg xmlns="http://www.w3.org/2000/svg" class="vertical-nav-icon" fill="currentColor" viewBox="0 0 16 16">
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
            </svg>
            <span class="mode-name"> 받아쓰기</span>
          </div>
        </a>

        <a href="#" class="mode-a-tag">
          <div class="mode-block">
            <svg xmlns="http://www.w3.org/2000/svg" class="vertical-nav-icon" fill="currentColor" viewBox="0 0 16 16">
              <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
              <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
            </svg>
            <span class="mode-name"> 테스트</span>
          </div>
        </a>
      </div>


      <div id='game'>
        <p class="vertical-nav-title">게임</p>

        <a href="#" class="mode-a-tag">
          <div class="mode-block">
            <svg xmlns="http://www.w3.org/2000/svg" class="vertical-nav-icon" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm7-8a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 4.293V.5A.5.5 0 0 1 8 0zm-.5 11.707-1.146 1.147a.5.5 0 0 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 11.707V15.5a.5.5 0 0 1-1 0v-3.793z"/>
            </svg>
            <span class="mode-name"> 카드 맞추기</span>
          </div>
        </a>

        <a href="#" class="mode-a-tag">
          <div class="mode-block">
            <svg xmlns="http://www.w3.org/2000/svg" class="vertical-nav-icon" fill="currentColor" viewBox="0 0 16 16">
              <path d="M14 4.577v6.846L8 15l-6-3.577V4.577L8 1l6 3.577zM8.5.134a1 1 0 0 0-1 0l-6 3.577a1 1 0 0 0-.5.866v6.846a1 1 0 0 0 .5.866l6 3.577a1 1 0 0 0 1 0l6-3.577a1 1 0 0 0 .5-.866V4.577a1 1 0 0 0-.5-.866L8.5.134z"/>
            </svg>
            <span class="mode-name"> 그래비티</span>
          </div>
        </a>

        <a href="#" class="mode-a-tag">
          <div class="mode-block">
            <svg xmlns="http://www.w3.org/2000/svg" class="vertical-nav-icon" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"/>
              <path d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"/>
            </svg>
            <span class="mode-name"> live</span>
          </div>
        </a>

      </div>
    </nav>

    <div class="body-top-right">
      <div class="flip-card">

          <div id="carouselExampleCaptions" class="carousel slide" data-bs-interval="false"> {/*data-bs-interval="false" 은 자동회전 안하게 하는 코드*/}

              <div class="carousel-inner" id="carousel-inner"> {/*한국어, 영어 카드 html*/}
                <MakeFlipWordCard words={classData}/>
              </div>
            </div>


        </div>

      <div class="flip-card-btn">
        <div class="flip-card-order">
          <span class="before">
            <button class=" carousel-control-prev bs-button" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
          </span>
          <span class="now">1/2</span>
          <span class="after">
            <button class="carousel-control-next bs-button" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </span>
        </div>

        <div class="shortcut-fullscreen">
          <span class="shortcut">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-keyboard" viewBox="0 0 16 16">
              <path d="M14 5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h12zM2 4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2z"/>
              <path d="M13 10.25a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm0-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5 0A.25.25 0 0 1 8.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 8 8.75v-.5zm2 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5a.25.25 0 0 1-.25-.25v-.5zm1 2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-5-2A.25.25 0 0 1 6.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 6 8.75v-.5zm-2 0A.25.25 0 0 1 4.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 4 8.75v-.5zm-2 0A.25.25 0 0 1 2.25 8h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 2 8.75v-.5zm11-2a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm-2 0A.25.25 0 0 1 9.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 9 6.75v-.5zm-2 0A.25.25 0 0 1 7.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 7 6.75v-.5zm-2 0A.25.25 0 0 1 5.25 6h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5A.25.25 0 0 1 5 6.75v-.5zm-3 0A.25.25 0 0 1 2.25 6h1.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-1.5A.25.25 0 0 1 2 6.75v-.5zm0 4a.25.25 0 0 1 .25-.25h.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-.5a.25.25 0 0 1-.25-.25v-.5zm2 0a.25.25 0 0 1 .25-.25h5.5a.25.25 0 0 1 .25.25v.5a.25.25 0 0 1-.25.25h-5.5a.25.25 0 0 1-.25-.25v-.5z"/>
            </svg>
          </span>
          <span class="fullscreen">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrows-fullscreen" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
            </svg>
          </span>
        </div>
        </div>

    </div>
  </div>

  <div class="body-bottom">

    <div class="profile">
      만든 이
      <a href=""><div class="user"><ClassUserName classData={classData}/></div></a>
      <div class="small-class-name">{nowClass}</div>
    </div>

    <div class="word-btn">
      <span class="add">
        <svg xmlns="http://www.w3.org/2000/svg" class="word-btn-icon bi bi-plus" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
      </span>
      <span class="edit">
        <svg xmlns="http://www.w3.org/2000/svg" class="word-btn-icon" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg>
      </span>
      <span class="upload">
        <svg xmlns="http://www.w3.org/2000/svg" class="word-btn-icon" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
          <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
        </svg>
      </span>
      <span class="info">
        <svg xmlns="http://www.w3.org/2000/svg" class="word-btn-icon bi bi-info" fill="currentColor" viewBox="0 0 16 16">
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
      </span>
      <span class="view-more">
        <svg xmlns="http://www.w3.org/2000/svg" class="word-btn-icon" fill="currentColor" viewBox="0 0 16 16">
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
        </svg>
      </span>
    </div>
  </div>
</section>
<main class="page" id="page" role="main" itemscope="" itemprop="mainContentOfPage">
<section class="page-elem-bottom-background">
  <div class="page-elem">
    <div class="flex-space-between word-list-standard">
      <div class="word-len">이 세트 단어(2)</div>
      <div class="word-list-standard-dropdown">내 통계 ⬇️</div>
    </div>

    <div class="flex-space-between">
      <div class="heading">
        <h4>학습하지 않음 (2)</h4>
        <div class="p">아직 이 단어들을 학습하지 않았어요!</div>
      </div>

      <a href="#">
        <span class="select-all">★ 2개 선택</span>
      </a>

    </div>

    <div class="word-card-list">  
      <MakeWordInfoCard words={classData} editInputId={editInputId}/>
    </div>
  </div>

</section>
</main>
</>
}

function Speaker_btn_event(event) {
  let id = $(this).attr('id')

  let words = event.data.words
  let word
  words.map(v => {
    if (v.pk == id) {
      word = v
    }
  })
  // speakWord(word.fields)
}

// function speakWord(wordFields) {
//   let parameters = {
//     onend: () => { responsiveVoice.speak(`${wordFields.KO_word}`, 'Korean Male');}
//   }
//   responsiveVoice.speak(`${wordFields.EN_word}`, 'US English Male', parameters)
// }

function ClassUserName({classData}) {
  let isData = !(classData[0] === 'noData')
  
  if (isData) {
    return <>{classData[0].fields.user}</>
  } else {
    return <>loading</>
  }
}


function editBtnClickEvent(event) {
  event.stopPropagation()
  let id = $(this).attr('id')
  let words = event.data.words

  let seteditInputId = event.data.seteditInputId
  seteditInputId(id)

  let word
  Object.values(words).map(v => {
    if (v.pk == id ) {
      word = v
    }
  })
  let eventData = {
    word: word, 
    seteditInputId: seteditInputId, 
    setclassData: event.data.setclassData
  }
  $('html').off().on('click', eventData, inputClickEvent)
}
function inputClickEvent(event) {
  let id = event.data.word.pk
  let isClickEN_wordInput = $(event.target).hasClass(`EN_word_input-${id}`)
  let isClickKO_wordInput = $(event.target).hasClass(`KO_word_input-${id}`)
  let isNotClickInput = !(isClickEN_wordInput || isClickKO_wordInput)

  // defaultWordInfoCardHtml = `<div class="EN_word">${word.fields.EN_word}</div><div class="KO_word">${word.fields.KO_word}</div>`

  if (isNotClickInput && isEditWordInputCard) {
    SaveEditWordData(id)
        .then((modifiedWords) => {
          let seteditInputId = event.data.seteditInputId
          let setclassData = event.data.setclassData
          
          seteditInputId(null)
          setclassData(modifiedWords)

        })
  }
}

function MakeFlipWordCard({words}) {
  let flipWordCardJsx = []
  let word
  let wordsLength = Object.keys(words).length
  let isData = !(words[0] === 'noData')
  
  if (isData) {
    if (wordsLength === 1 ) {
      flipWordCardJsx.push(<div class="carousel-item active"><div class="card-word"><div class="flip-container"><div class="flipper"><div class="front"><div class="helper"></div><div class="front-text">{words[0].fields.EN_word}</div></div><div class="back"><div class="helper"></div><div class="back-text">{words[0].fields.KO_word}</div></div></div></div></div></div>)
    } else {
      for (word of words) {
        if (word === words[0]) {
          flipWordCardJsx.push(<div class="carousel-item active"><div class='card-word'><div class="flip-container"><div class="flipper"><div class="front"><div class="helper"></div><div class="front-text">{word.fields.EN_word}</div></div><div class="back"><div class="helper"></div><div class="back-text">{word.fields.KO_word}</div></div></div></div></div></div>)
        } else {
          flipWordCardJsx.push(<div class="carousel-item"> <div class='card-word'><div class="flip-container"><div class="flipper"><div class="front"><div class="helper"></div><div class="front-text">{word.fields.EN_word}</div></div><div class="back"><div class="helper"></div><div class="back-text">{word.fields.KO_word}</div></div></div></div></div></div>)
        }
      }
    }
    return flipWordCardJsx
  } else {
    return <>loading</>
  }
}

function MakeWordInfoCard({words, editInputId}) {
  let wordinfocardhtml = []
  let word
  let wordslength = Object.keys(words).lengh
  let isdata = !(words[0] === 'noData')
  
  if (isdata) {
    if (wordslength === 1 ) {
      let word = words
      wordinfocardhtml.push(<div class="word-card"><div class="word-text" id={`word-${word.pk}`}>
        <Input_or_Default_WordCard word={word} editInputId={editInputId}/>
        </div><div class="word-btns"><span class="star_btn"><svg aria-label="별표하기" class="UIIcon UIIcon--star" role="img"><noscript></noscript><use xlinkHref="#star"></use><noscript></noscript></svg></span><span class="speaker_btn" id={word.pk}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentcolor" class="bi bi-volume-up-fill" viewbox="0 0 16 16"><path d="m11.536 14.01a8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707a7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/><path d="m10.121 12.596a6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707a5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/><path d="m8.707 11.182a4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182l8 5.525a3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707zm6.717 3.55a.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39l3.825 10.5h1.5a.5.5 0 0 1 1 10v6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06z"/></svg></span><button class="edit-btn" id={word.pk}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentcolor" class="bi bi-pencil-fill" viewbox="0 0 16 16"><path d="m12.854.146a.5.5 0 0 0-.707 0l10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061l9.793 2.5 3.293 9h3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468a.5.5 0 0 1 6 13.5v13h-.5a.5.5 0 0 1-.5-.5v12h-.5a.5.5 0 0 1-.5-.5v11h-.5a.5.5 0 0 1-.5-.5v10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/></svg></button></div></div>)
    } else {
      for (word of words) {
        wordinfocardhtml.push(<div class="word-card"><div class="word-text" id={`word-${word.pk}`}>
          <Input_or_Default_WordCard word={word} editInputId={editInputId}/>
          </div><div class="word-btns"><span class="star_btn"><svg aria-label="별표하기" class="UIIcon UIIcon--star" role="img"><noscript></noscript><use xlinkHref="#star"></use><noscript></noscript></svg></span><span class="speaker_btn" id={word.pk}><svg aria-label="오디오" class="UIIcon UIIcon--audio" role="img"><noscript></noscript><use xlinkHref="#audio"></use><noscript></noscript></svg></span><button class="edit-btn" id={word.pk}><svg aria-label="수정" class="UIIcon UIIcon--edit" role="img"><noscript></noscript><use xlinkHref="#edit"></use><noscript></noscript></svg></button></div></div>)
      }
    }
    wordinfocardhtml.push(<div class="word-create-or-delete-container"><a href={`/${nowClass}/update`} class="word-create-or-delete-a"><span class="word-create-or-delete-btn">단어 추가 / 삭제</span></a></div>)
    return wordinfocardhtml
  } else {
    return <>loading</>
  }
  
}

function Input_or_Default_WordCard({word, editInputId}) {
  let isdata = !(word === 'noData')
  
  if (isdata) {
    const id = word.pk
    let wordFields = word.fields
    let defaultInfoCardJsx = <><div class="EN_word">{wordFields.EN_word}</div><div class="KO_word">{wordFields.KO_word}</div></>
    const csrftoken = getCookie('csrftoken')
    let editInputCardJsx = <>
      <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken}/>
      <input type="text" name="EN_word" class={`EN_word_input-${id} EN_word_input`} autocomplete="off" defaultValue={wordFields.EN_word}/>
      <input type="text" name="KO_word" class={`KO_word_input-${id} KO_word_input`} autocomplete="off" defaultValue={wordFields.KO_word}/>
      <input type="hidden" name="memorize" class={`memorize-${id}`} value={wordFields.memorize}/>
      <input type="hidden" name="Class" class={`Class-${id}`} value={wordFields.Class}/>
    </>

    if (editInputId === null) {
      isEditWordInputCard = false
      return defaultInfoCardJsx
    } else {
      isEditWordInputCard = true
      if (editInputId == id) {
        return editInputCardJsx
      } else {
        return defaultInfoCardJsx
      }
    }
  } else {
    return <>loading</>
  }
}

function flip() {
  $(this).closest('.flip-container').toggleClass('hover')
  $(this).css('transform, rotateY(180deg)')
}

export default WordClass