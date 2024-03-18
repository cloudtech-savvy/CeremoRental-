from django.db import models


class Vendor(models.Model):
    name = models.CharField(max_length=255)
    # add any additional fields here

    def __str__(self):
        return self.name