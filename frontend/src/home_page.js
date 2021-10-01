import './static/word/main-home.css'
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';


function retrunHomeClassCard(result) {
    let html = [];
    let Class;
    for (Class of result.user_class_list) {
        let class_user = result.class_info[Class].user
        let word_len = result.class_info[Class].word_len

        html.push(<div class="card float-left class-card">
            <Link to={`/class/${Class}/`} class="class-url">
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
            </Link>
        </div>)


    }
    return html
}

function MakeHomeClassCard() {
    let [html, setHtml] = useState(<>fafsdfs</>);

    useEffect(() => {
        fetch('/data/')
            .then((response) => response.json())
            .then((result) => {
                if (result.user_class_list[0]) {
                    setHtml(retrunHomeClassCard(result))
                } else {
                    setHtml(<h1>데이터가 없습니다. 지금바로 만드세요!</h1>)
                }
            })
            .catch((err) => console.log('err: ', err));
    }, []);
    return html
}

function Home_page() {
    return <section class="page-elem">
                <div className="recent-learn-container">
                    <div className="guide-row">
                        <h5>최근 학습함</h5>
                        <div className="show-all">모두 보기</div>
                    </div>

                    <div className="class-card-row col-12">
                        <MakeHomeClassCard />
                    </div>

                </div>
            </section>
}

export default Home_page;