from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Cart(models.Model):
    productInstance = models.PositiveIntegerField() 
    numberOrdered = models.PositiveIntegerField()
    name = models.CharField(max_length=200)
    id = models.BigAutoField(primary_key=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    sale = models.BooleanField(False)
    salesPercent = models.DecimalField(max_digits=4, decimal_places=2)  
    type = models.CharField(max_length=70)  
    season = models.CharField(max_length=70) 
    dateAdded = models.DateTimeField()
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="cart", default='')