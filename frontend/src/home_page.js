import './static/word/main-home.css'
import {useEffect, useState} from 'react';
function retrunHomeClassCard(result) {
    console.log(result)
    let html = [];
    let Class;
    for (Class of result.user_class_list) {
        let class_user = result.class_info[Class].user
        let word_len = result.class_info[Class].word_len

        html.push(<div class="card float-left class-card">
          <a href="/{Class}/" class="class-url">
              <div class="card-body">
                  <div class="card-top">
                      <div class="card-title">
                          {Class}</div>
                      <div class="word-len" id="{space_to_underscore(Class)}-len">
                          {word_len}단어</div>
                  </div>
                  <div class="word-user">
                      <a href="#" id="{space_to_underscore(Class)}-user" class="class-user-url">
                          {class_user}</a>
                  </div>
              </div>
          </a>
        </div>)


    }
    console.log(typeof html)
    console.dir(html)
    return html
}

function MakeHomeClassCard() {
    let [html, setHtml] = useState(<>fafsdfs</>);

    console.log('function')
    useEffect(() => {
        fetch('/data/')
            .then((response) => response.json())
            .then((result) => {
                setHtml(retrunHomeClassCard(result))
            })
            .catch((err) => console.log('err: ', err));
    }, []);
    console.log(html)
    return html
}


function space_to_underscore(value) {
  let split_value = value.split(' ')
  let new_str = ''

  for (let i = 0; i < split_value.length; i++) {
    new_str += split_value[i]
    if (i < split_value.length - 1) {
      new_str += '_'
    }
  }
  return new_str
}


function Home_page() {
    return <>
                <div className="recent-learn-container">
                    <div className="guide-row">
                        <h5>최근 학습함</h5>
                        <div className="show-all">모두 보기</div>
                    </div>

                    <div className="class-card-row col-12">
                        <MakeHomeClassCard />
                    </div>

                </div>
            </>
}

export default Home_page;