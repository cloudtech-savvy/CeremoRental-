# from django.urls import path
# from .views import OrderDetailUpdateDeleteView, ProductDetailUpdateDeleteView, UserDetailUpdateDeleteView, UserListCreateView, ProductListCreateView, OrderListCreateView
# from rest_framework.authtoken.views import obtain_auth_token
# urlpatterns = [
#     path('users/', UserListCreateView.as_view(), name='user-list-create'),
#     path('users/<int:pk>/', UserDetailUpdateDeleteView.as_view(), name='user-detail-update-delete'),
#     path('products/', ProductListCreateView.as_view(), name='product-list-create'),
#     path('products/<int:pk>/', ProductDetailUpdateDeleteView.as_view(), name='product-detail-update-delete'),
#     path('orders/', OrderListCreateView.as_view(), name='order-list-create'),
#     path('orders/<int:pk>/', OrderDetailUpdateDeleteView.as_view(), name='order-detail-update-delete'),
#     path('api-token-auth/', obtain_auth_token, name='api_token auth'),
# ]
from django.urls import path
from .views import DocumentView, register
from .views import ItemList, ItemDetail
from rest_framework.authtoken.views import ObtainAuthToken

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', ObtainAuthToken.as_view(), name='login'),
    path('items/', ItemList.as_view(), name='item-list'),
    path('items/<int:pk>/', ItemDetail.as_view(), name='item-detail'),
    path('documents/', DocumentView.as_view(), name='document_upload'),
    path('documents/<int:pk>/', DocumentView.as_view(), name='document'),
]



# Path: api/views.py



    




  

    

