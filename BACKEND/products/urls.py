from django.urls import path

from . import views

app_name = 'products'
urlpatterns = [
    path('', views.ProductsListView.as_view(), name='products-list'),
    path('<int:pk>', views.ProductDetailView.as_view(), name='product-detail'),
    path('api', views.ProductsListAPI, name='product-api'),

]