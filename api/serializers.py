# from rest_framework import serializers
# from .models import User, Product, Order

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['id', 'username', 'user_type']

# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = ['id', 'vendor', 'name', 'description', 'price', 'image', 'rental_date', 'return_date']

# class OrderSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Order
#         fields = ['id', 'user', 'product', 'rental_date', 'return_date']


"""
  item serializers.py
"""
from rest_framework import serializers
from .models import Item
from .models import UserProfile, Document

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'name', 'description', 'price', 'vendor']
"""
UserProfile serializers.py
"""
class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['user', 'bio', 'profile_picture']

"""
    serializers.py for file upload
"""
class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = "__all__"