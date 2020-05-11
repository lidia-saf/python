from django.contrib.auth.models import User, Group
from rest_framework import serializers
from .models import Song


class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ['id', 'artist', 'name', 'year']

class SongMiniSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = ['id', 'artist', 'name']