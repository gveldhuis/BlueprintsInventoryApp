from django.db import models
from login.models import Volunteer

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'categories'
class Supply(models.Model):
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    ref_number = models.CharField(max_length=20)
    price = models.DecimalField(max_digits=15, decimal_places=2, default=0.00)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, default=5)
    flagged = models.BooleanField(default=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'supplies'

class InventoryItem(models.Model):
    expiration_date = models.DateField()
    amount = models.PositiveSmallIntegerField()
    supply = models.ForeignKey(Supply, on_delete=models.CASCADE)
    volunteer = models.ForeignKey(Volunteer, on_delete=models.CASCADE)

    def __str__(self):
        return "%s (%s)" % (self.supply.name, self.amount)
