# Generated by Django 3.2.5 on 2021-10-11 03:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('word', '0006_auto_20211011_1211'),
    ]

    operations = [
        migrations.RenameField(
            model_name='word',
            old_name='EN_word',
            new_name='key',
        ),
        migrations.RenameField(
            model_name='word',
            old_name='KO_word',
            new_name='value',
        ),
        migrations.RemoveField(
            model_name='word',
            name='Class',
        ),
        migrations.AddField(
            model_name='word',
            name='trainingSet_id',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]