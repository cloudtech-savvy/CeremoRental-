from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

from django.urls import reverse_lazy
from django.contrib.auth.views import LoginView
from django.shortcuts import redirect
from django.http import HttpResponse

from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import Group


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

@login_required
def some_view(request):
    if request.user.groups.filter(name='Admins').exists():
        # do something for admins
        return HttpResponse("Admin view")
    elif request.user.groups.filter(name='Vendors').exists():
        # do something for vendors
        return HttpResponse("Vendor view")
    else:
        # do something for customers
        return HttpResponse("Customer view")



class UserLoginView(LoginView):

    def get_success_url(self):
        if self.request.user.groups.filter(name='Admins').exists():
            return reverse_lazy('app:admin_home')
        elif self.request.user.groups.filter(name='Vendors').exists():
            return reverse_lazy('app:vendor_home')
        else:
            return reverse_lazy('app:customer_home')