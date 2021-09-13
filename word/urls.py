from django.urls import path
from . import views
from django.views.generic import TemplateView

app_name = 'word'
urlpatterns = [
    path('', views.home_page_data, name='home-page-data'),
    path('create_training_set/', views.render_create_training_set, name='create-training-set'),
    path('<str:Class>/', TemplateView.as_view(template_name="word/class_home.html"), name='class-home'),
    path('<str:Class>/update/', TemplateView.as_view(template_name="word/update.html"), name='class-update'),
    path('<str:Class>/data/', views.class_home_data, name='class-home-data'),
    path('<str:Class>/<int:id>/', views.word_detail, name='word_detail'),
]
