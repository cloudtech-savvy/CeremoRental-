# from django.contrib.auth.models import AbstractUser, Group, Permission
# from django.db import models

# class User(AbstractUser):
#     USER_TYPE_CHOICES = (
#         ('ADMIN', 'Admin'),
#         ('VENDOR', 'Vendor'),
#         ('USER', 'User'),
#     )
#     user_type = models.CharField(max_length=6, choices=USER_TYPE_CHOICES, default='USER')
#     groups = models.ManyToManyField(Group, blank=True, related_name="customuser_groups")
#     user_permissions = models.ManyToManyField(Permission, blank=True, related_name="customuser_user_permissions")


# from django.db import models
# from django.conf import settings

# class Product(models.Model):
#     vendor = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, limit_choices_to={'user_type': 'VENDOR'})
#     name = models.CharField(max_length=255)
#     image = models.ImageField(upload_to='product_images/', blank=True, null=True)
#     description = models.TextField()
#     price = models.DecimalField(max_digits=6, decimal_places=2)

#     def __str__(self):
#         return self.name

# class Order(models.Model):
#     user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, limit_choices_to={'user_type': 'USER'})
#     product = models.ForeignKey(Product, on_delete=models.CASCADE)
#     rental_date = models.DateTimeField(auto_now_add=True)
#     return_date = models.DateTimeField(null=True, blank=True)
    
#     def __str__(self):
#         return f'{self.user.username} - {self.product.name}'

from django.db import models
from django.contrib.auth.models import User
from rest_framework import serializers

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    ROLES = (
        ('ADMIN', 'Admin'),
        ('VENDOR', 'Vendor'),
        ('USER', 'User'),
    )
    role = models.CharField(max_length=6, choices=ROLES, default='USER')
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pictures/', null=True, blank=True)

class Item(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    vendor = models.ForeignKey(UserProfile, on_delete=models.CASCADE, limit_choices_to={'role': 'VENDOR'})

class Rental(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE, limit_choices_to={'role': 'USER'})
    rental_date = models.DateTimeField(auto_now_add=True)
    return_date = models.DateTimeField(null=True, blank=True)






    """
    handling file upload
    """
class Document(models.Model):
    uploaded_at = models.DateTimeField(auto_now_add=True)
    upload = models.FileField()


class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = "__all__"

    def validate_upload(self, value):
        if value.size > 100 * 1024 * 1024:
            raise serializers.ValidationError("File size must be less than 100MB")
        return value
    