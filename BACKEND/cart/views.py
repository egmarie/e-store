from django.shortcuts import render
from .models import Cart
from django.http.response import HttpResponseRedirect
from django.http import JsonResponse

# Create your views here.

def CartListAPI(request):
  
    cartItems_ = Cart.objects.values('name', 'id', 'type', 'price', 'season', 'sale', 'productInstance', 'dateAdded', 'numberOrdered')
    data = {
        'cartList' : list(cartItems_)
         
    }
    return JsonResponse(data)

