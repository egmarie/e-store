# Generated by Django 4.0.4 on 2022-07-14 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('prodName', models.CharField(max_length=200)),
                ('prodID', models.BigAutoField(primary_key=True, serialize=False)),
                ('prodPrice', models.DecimalField(decimal_places=2, max_digits=10)),
                ('prodSale', models.BooleanField(verbose_name=False)),
                ('prodSalesPercent', models.DecimalField(decimal_places=2, max_digits=4)),
                ('prodType', models.CharField(max_length=70)),
                ('prodSeason', models.CharField(max_length=70)),
                ('prodAdded', models.DateTimeField(auto_now_add=True)),
                ('prodSizes', models.CharField(max_length=5)),
            ],
        ),
    ]