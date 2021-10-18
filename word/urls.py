from django.urls import path
from . import views
from django.views.generic import TemplateView

app_name = 'word'
urlpatterns = [
    path('', views.home_page_data, name='home-page-data'),
    path('create_training_set/', views.create_training_set, name='create-training-set'),
    path('<str:Class>/update/', TemplateView.as_view(template_name="word/update.html"), name='class-update'),
    path('<str:title>/', views.class_home_data, name='class-home-data'),
    path('<str:Class>/<int:id>/', views.word_detail, name='word_detail'),
]
