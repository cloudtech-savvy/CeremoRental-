from rest_framework import viewsets
from .models import Product
from .serializers import ProductSerializer
from rest_framework import generics

from django.shortcuts import render
from django.http import JsonResponse
from .models import Category, Product

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    class ProductSearchView(generics.ListAPIView):
        serializer_class = ProductSerializer
    
        def get_queryset(self):
            query = self.request.query_params.get('q', '')
            return Product.objects.filter(category__name__icontains=query)
        
class productListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class productDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# Query all categories and retrieve only id and name fields

def get_categories(request):
    categories = Category.objects.all().values('id', 'name')  
    return JsonResponse(list(categories), safe=False)



class ProductSearchView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        query = self.request.query_params.get('q', '')
        return Product.objects.filter(category__name__icontains=query)