from django.db import models

# Create your models here.
class Transaction(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=200)
    category =  models.CharField(max_length=100)
    amount =  models.CharField(max_length=100)

    def __str__(self):
        return self.name
