from django.contrib import admin

# Register your models here.
from .models import Word, trainingSet

admin.site.register(Word)
admin.site.register(trainingSet)