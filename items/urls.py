from django.contrib import admin
from django.urls import path
from .import views
from .views import items_list, items_detail
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    # path('items/',views.items_list),
    path('items/', items_list, name='items_list'),
    path('items/<int:id>',items_detail,name='items_detail'),
]
urlpatterns=format_suffix_patterns(urlpatterns)
