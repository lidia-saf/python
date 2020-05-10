from django.db import models

# Create your models here.
class Song(models.Model):
    artist = models.CharField(max_length=32)
    name = models.CharField(max_length=256)
    year = models.IntegerField()
