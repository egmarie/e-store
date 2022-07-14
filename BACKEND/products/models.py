from django.db import models

# inventory
# available for pick up: 8/22/23
# this product: made 3, 4, 5, 3, 3, 2 
# bought: 1, 0, 3, 1, 2, 2 

# Create your models here.
#sm, md, lg, xl, xxl, xxl
# pants, shorts, shirts, sweaters skirts, dresses



class Products(models.Model):
    name = models.CharField(max_length=200)
    id = models.BigAutoField(primary_key=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    sale = models.BooleanField(False)
    salesPercent = models.DecimalField(max_digits=4, decimal_places=2)  
    type = models.CharField(max_length=70)  
    season = models.CharField(max_length=70) 
    dateAdded = models.DateTimeField(auto_now_add=True)


class Sizes(models.Model):
    clothingItem = models.ForeignKey(Products, on_delete=models.CASCADE, blank=True, related_name="sizes")
    sm = models.PositiveIntegerField()
    md = models.PositiveIntegerField()
    lg = models.PositiveIntegerField()
    xl = models.PositiveIntegerField()
    xxl = models.PositiveIntegerField()






