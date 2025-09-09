from django.db import models

class Inventory(models.Model):
    item = models.CharField(max_length=100)
    quantity = models.IntegerField()
    status = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.item} ({self.quantity}) - {self.status}"
# Create your models here.
