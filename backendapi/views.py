from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializer import UserSerializer
from rest_framework import status
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User

from rest_framework.decorators import  authentication_classes,permission_classes
from rest_framework.authentication import SessionAuthentication,TokenAuthentication
from rest_framework.permissions import IsAuthenticated


"""
API call for sinup
"""
@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user =User.objects.get(username=request.data['username'])
        """ store password with hashed value
        """
        user.set_password(request.data['password'])
        user.save()
        token = Token.objects.create(user=user)
        return Response({'token':token.key,'user': serializer.data})

    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

"""
API call for login 
"""
@api_view(['POST'])
def login(request):
   user=get_object_or_404(user,username=request.data['username'])
   if not user.check_password(request.data(['password'])):
       return Response("Missing User not found ",status=status.HTTP_404_NOT_FOUND)
   token, created=Token.objects.get_or_create(user=user)
   serializer=UserSerializer(user)
   return Response({'token':token.key,'user': serializer.data})
"""
API call to test  tokens  authentications
"""
@api_view(['GET'])
@authentication_classes([SessionAuthentication,TokenAuthentication])
@permission_classes([IsAuthenticated])
def test_token(request):

    return Response("passed for { }".format(request.user.email))

def test(request):
    data = {'name': 'Django', 'age': 29}
    return Response(data)
