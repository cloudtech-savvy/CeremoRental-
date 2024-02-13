# from django.shortcuts import render
from django.http import JsonResponse
from items.Serializer import itemsSerializer
from .models import items
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly
# from rest_framework.renderers import JSONRenderer

# @api_view(['GET','POST'])
def items_list(request,format=None):
    """
      API endpoint for getting all the items.
     """
    if request.method=='GET':
        item_instances =items.objects.all()
        serializer=itemsSerializer(item_instances ,many=True)
        return JsonResponse({'Items': serializer.data})
    elif request.method=='POST':
        serializer=itemsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return  Response(serializer.data,status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
# @api_view(['GET','PUT','DELETE'])
def items_detail(request,id,format=None):
    try:
        item_instance = items.objects.get(pk=id)
    except items.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = itemsSerializer(item_instance)
        return Response(serializer.data)
    
    elif request.method == 'PUT':
        serializer = itemsSerializer(item_instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        item_instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




