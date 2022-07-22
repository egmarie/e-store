

from rest_framework import serializers
from products.models import Products
from django.conf import settings


class ProductsSerializer(serializers.ModelSerializer):
     class Meta:
        model = Products
        fields = ('id','name', 'pic', 'sale', 'price', 'type', 'season', 'dateAdded' )