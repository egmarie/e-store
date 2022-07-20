from django.urls import path

from . import views


app_name = 'cart'
urlpatterns = [
    path('api', views.CartListAPI, name='cart-api'),

]