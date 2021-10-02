from django.contrib import admin
from django.conf import settings
from django.urls import path
from django.urls.conf import include
from django.conf.urls.static import static
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    #react app
    path('', TemplateView.as_view(template_name='index.html')),
    path('create_training_set/', TemplateView.as_view(template_name='index.html')),
    path('class/<str:Clss>/', TemplateView.as_view(template_name='index.html')),

    path('data/', include('word.urls')),

    #만약 GET요청이면 react앱에 연결
    path('accounts/', include('accounts.urls')),
    ]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)