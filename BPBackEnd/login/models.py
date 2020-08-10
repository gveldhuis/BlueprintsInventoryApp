from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import ugettext_lazy as _

class Chapter(models.Model):
    name = models.CharField(max_length=50)
    university = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Event(models.Model):
    chapter = models.ForeignKey(Chapter, on_delete=models.CASCADE)
    date = models.DateField()
    name = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Organization(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    email = models.EmailField(_('email address'))

    def __str__(self):
        return self.name

class Volunteer(models.Model):
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, blank=True, null=True)
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField(_('email address'))

    def __str__(self):
        return "%s %s" % (self.first_name, self.last_name)
