from django.urls import path
from .views import ProductViewSet, ProductSearchView, productListView, productDetailView  



urlpatterns = [

path('products/', ProductViewSet.as_view({'get': 'list', 'post': 'create'}), name='products'),
path('products/<int:pk>/', ProductViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'}), name='product-detail'),

]
