# Generated by Django 3.2.5 on 2021-10-11 04:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('word', '0009_alter_trainingset_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='trainingset',
            old_name='user',
            new_name='user_id',
        ),
    ]
