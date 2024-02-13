from django.db import models

# Create your models here.
class items(models.Model):
    name=models.CharField(max_length=200)
    description=models.CharField(max_length=200)
    material=models.CharField(max_length=200)
    status=models.CharField(max_length=200)
    pricing=models.CharField(max_length=200)
    
    def __str__(self):
        return self.name 
    # +'' + self.description +''+ self.pricing
    