from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from .views import Registration, UsernameValidationView

urlpatterns=[
    path('register', Registration.as_view(), name='register'),
    path('validate-username', csrf_exempt(UsernameValidationView.as_view()),
         name="validate-username"),
]