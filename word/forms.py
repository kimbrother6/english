from django import forms
from django.db.models import fields
from .models import Word

class englishNoteForm(forms.ModelForm):

    class Meta:
        model = Word
        fields = '__all__'