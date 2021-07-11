from django.db import models
from django.db.models.fields import CharField
from django import forms
from django.db.models import fields

# Create your models here.
class Word(models.Model):
    user = models.EmailField(null=True, blank=True)
    EN_word = models.TextField(null=True, blank=True)
    KO_word = models.TextField(null=True, blank=True)
    memorize = models.CharField(max_length=50, null=True, blank=True)
    Class = models.CharField(max_length=30, null=True, blank=True) #class 로는 이름이 정의되지 않는다.

    def __str__(self):
        return self.EN_word

class WordForm(forms.ModelForm):
    class Meta:
        model = Word
        fields = '__all__'