from django.shortcuts import render
from django.http.response import HttpResponseRedirect
from django.http import JsonResponse
from django.contrib.staticfiles import storage
from .serializers import ProductsSerializer
from rest_framework.views import APIView
from django.views.generic import DetailView, ListView
from rest_framework import viewsets, filters, generics, permissions

from .models import Products

# Create your views here.

class ProductsListView(APIView):
    serializer_class = ProductsSerializer
    model = Products
    context_object_name = "products"

    queryset = Products.objects.all()


def ProductsListAPI(request):
  
    products_ = Products.objects.values('name', 'id', 'type', 'price', 'season', 'sale', 'pic')
    data = {
        'products' : list(products_)
    }
    return JsonResponse(data)

class ProductDetailView(generics.RetrieveAPIView):
    model = Products
    context_object_name = "product"



class MyStaticFilesStorage(storage.StaticFilesStorage):
    def __init__(self, *args, **kwargs):
        kwargs['file_permissions_mode'] = 0o640
        kwargs['directory_permissions_mode'] = 0o760
        super().__init__(*args, **kwargs)
    
