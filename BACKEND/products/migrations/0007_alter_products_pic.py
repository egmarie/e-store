# Generated by Django 4.0.4 on 2022-07-21 21:36

from django.db import migrations, models
import pathlib


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0006_alter_products_pic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='pic',
            field=models.ImageField(default='product_image.jpg', upload_to=[pathlib.PurePosixPath('/Users/egmarie/django-prjs/e-store'), '/media']),
        ),
    ]