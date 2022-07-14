from django.contrib import admin
from . import models



# Register your models here.
class ProductsAdmin(admin.ModelAdmin):
    list_display = ('name',)

admin.site.register(models.Products, ProductsAdmin)


class SizesAdmin(admin.ModelAdmin):
    list_display = ('sm', 'md', 'lg', 'xl', 'xxl',)

admin.site.register(models.Sizes, SizesAdmin)
