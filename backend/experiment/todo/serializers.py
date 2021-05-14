from rest_framework import serializers
from .models import Todo


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    key = serializers.SerializerMethodField()

    class Meta:
        model = Todo
        fields = ['key', 'title', 'finished', 'created_at', 'updated_at']

    def get_key(self, obj):
        return obj.id
