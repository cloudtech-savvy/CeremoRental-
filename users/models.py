from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.

from django.conf import settings
from django.dispatch import receiver
from django.db.models.signals import post_save
from rest_framework.authtoken.models import Token

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)

    
    from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    # Add custom fields or methods if needed
    pass
