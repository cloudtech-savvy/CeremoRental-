from django.db import models
from vendors.models import Vendor
from django.contrib.auth.models import User


class Category(models.Model):
    name = models.CharField(max_length=255)
    # description = models.CharField(max_length=200, default='No description provided')
    
    def __str__(self):
        return self.name

class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    description = models.CharField(max_length=200, default='No description provided')
    price = models.DecimalField( max_digits=6, decimal_places=2 )

    # add any additional fields here
    def __str__(self):
        return self.name
    
class Customer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
class Rental(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    Product = models.ForeignKey(Product, on_delete=models.CASCADE)
    rental_date = models.DateField( auto_now_add=True)
    return_date = models.DateField( auto_now_add=False, auto_now=False, blank=True, null=True)
