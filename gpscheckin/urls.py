"""gpscheckin URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
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
from django.conf import settings
from django.contrib import admin
from django.urls import path, include 
from checkin.serializer.RegisterSerializer import UserRegistrationView as reg
from checkin.views.frontend import home as fviews 
from dormitory.views import home as index 
from checkin.views.auth365 import Callback
from django.conf.urls.static import static 
urlpatterns = [ 
    path('admin/', admin.site.urls), 
    path('api/auth/', include('rest_registration.api.urls')),
    path('api/auth/register-full/', reg.as_view(), name="rest_name_register"),
    path('auth/live',Callback.as_view()),
    path('api/', include("checkin.urls")),
    path('api/dorm/',include("dormitory.urls")),  
    path('checkin/', fviews),
    path('', index),
   # path('', include("proflie.api.urls"))
]+ static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)
