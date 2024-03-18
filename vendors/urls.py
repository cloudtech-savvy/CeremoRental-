from django.urls import path
from .views import VendorViewSet

urlpatterns = [
    path('vendors/', VendorViewSet.as_view({'get': 'list', 'post': 'create'}), name='vendors'),
    path('vendors/<int:pk>/', VendorViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='vendor-detail'),
    
]