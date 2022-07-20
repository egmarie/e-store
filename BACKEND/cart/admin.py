from django.contrib import admin
from . import models



# Register your models here.
class CartAdmin(admin.ModelAdmin):
    list_display = ('name', 'numberOrdered')

admin.site.register(models.Cart, CartAdmin)

# Register your models here.
