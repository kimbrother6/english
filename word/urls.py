from django.urls import path
from . import views

app_name = 'word'
urlpatterns = [
    path('', views.word_home_page, name='home-page'), #if GET_method: 홈화면 표시에 필요한 정보를 넘겨줌. if else POST_method: new word create (새로운 단어 생성)
    path('word_home_page_ajax/', views.word_home_page_ajax, name='word_home_page_ajax'), #이걸 없에야할지 말아야할지 모르겠음
    path('<str:Class>/', views.class_home, name='class-home'),#if GET_method: Class의 word를 JSON형식으로 return

    #str:Class를 추가한 이유는 단어를 업데이트 하고 나서 redirect할 때 다시 그 class-home으로 보내기 위해서. 그래서 특별한 경우만 class를 넣어줌
    path('<str:Class>/<int:id>/', views.update, name='update'),#if GET_method: Class안에 id가 id인 word의 정보를 json 으로 리턴; if else: DELETE_method: 특정 id의 word delete;              <_아직 안만듦_>if else: PUT_method: 특정 id edit. if else [또 한가지 뭐 메소드]_method: (put일때는 전체수정.) 이 메소드 일때에는 일부 수정.

    #자바스크립트에서 알맞은 데이터를 요청해서 가져간다음에 자바스크립트로 구현해야 될것 같다.  
    # path('<str:Class>/write/<str:EN_word>', views.write, name='write'),
    # path('<str:Class>/forgetting_curve/<str:some_day>', views.forgetting_curve, name='forgetting-curve'),
    # path('word_card/<str:Class>/<str:memorize>/', views.word_card, name='word-card'), 
    # path('view_class/<str:listName>/', views.view_class, name='view-class'),
]