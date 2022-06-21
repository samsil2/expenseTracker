from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from .views import *


urlpatterns=[
    path('register', Registration.as_view(), name='register'),
    path('username', csrf_exempt(UsernameValidationView.as_view()), name="validate-username"),
    path('emailValidation', csrf_exempt(EmailValidationView.as_view()), name='validate-email'),

]