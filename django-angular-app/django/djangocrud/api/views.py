from django.shortcuts import render

# Create your views here.

from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import SongSerializer, SongMiniSerializer
from .models import Song
from rest_framework.response import Response

class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.all()
    serializer_class = SongSerializer

    def list(self, request, *args, **kwards):
        songs = Song.objects.all()
        serializer = SongMiniSerializer(songs, many=True)
        return Response(serializer.data)
