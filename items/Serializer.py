from rest_framework import serializers
from .models import items

class itemsSerializer(serializers.ModelSerializer):
    class Meta:
        model=items
        fields=['id','name','description','pricing','material','status']
        