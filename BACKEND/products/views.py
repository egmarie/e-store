from django.shortcuts import render
from django.http.response import HttpResponseRedirect
from django.http import JsonResponse

from django.views.generic import DetailView, ListView

from .models import Products

# Create your views here.

class ProductsListView(ListView):
    model = Products
    context_object_name = "products"

    def get_queryset(self):
        return self.request.products.all()


def ProductsListAPI(request):
  
    products_ = Products.objects.values('name', 'id', 'type')
    data = {
        'products' : list(products_)
    }
    return JsonResponse(data)

class ProductDetailView(DetailView):
    model = Products
    context_object_name = "product"
    
