from django.contrib import admin
from .models import  Item, UserProfile, Rental 

# # Register your models here.
# admin.site.register(User)
# admin.site.register(Product)

admin.site.register(Item)
admin.site.register(UserProfile)
admin.site.register(Rental)

