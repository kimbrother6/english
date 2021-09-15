"""english URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf import settings
from django.urls import path
from django.urls.conf import include
from django.conf.urls.static import static
from django.views.generic import TemplateView

react_routes = [
    'create_training_set',
]

urlpatterns = [
    path('admin/', admin.site.urls),
    
    #react app
    path('', TemplateView.as_view(template_name='index.html')),
    path('login/', TemplateView.as_view(template_name='index.html')),
    path('create_training_set/', TemplateView.as_view(template_name='index.html')),
    path('class/<str:Clss>/', TemplateView.as_view(template_name='index.html')),

    path('data/', include('word.urls')),
    path('accounts/', include('accounts.urls')),
    #path(‘api/’, include(‘api.urls’)),
    ]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)