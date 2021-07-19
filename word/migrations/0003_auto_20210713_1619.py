# Generated by Django 3.2.5 on 2021-07-13 07:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('word', '0002_word_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='word',
            name='dt_created',
            field=models.DateField(auto_now_add=True, null=True, verbose_name='Date Created'),
        ),
        migrations.AddField(
            model_name='word',
            name='dt_modified',
            field=models.DateTimeField(auto_now=True, null=True, verbose_name='Date Modified'),
        ),
    ]