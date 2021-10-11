from django.db import models
from django.db.models.fields import CharField
from django import forms
from django.db.models import fields

# Create your models here.
class Word(models.Model):
    key = models.TextField(null=True, blank=True)
    value= models.TextField(null=True, blank=True)
    trainingSet_id = models.IntegerField(null=True, blank=True) #class 로는 이름이 정의되지 않는다.

    dt_created = models.DateField(auto_now_add=True, null=True, blank=True)
    dt_modified = models.DateTimeField(auto_now = True, null=True, blank=True)
    def __str__(self):
        return self.key

class trainingSet(models.Model):
    user_id = models.IntegerField(null=True, blank=True)
    title = models.CharField(max_length = 100, null=True, blank=True)
    explanation = models.CharField(max_length = 600, null=True, blank=True)
    words_length = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.title

#학습세트 정보에 관한 모델 만들어야됨

class WordForm(forms.ModelForm):
    class Meta:
        model = Word
        fields = '__all__'