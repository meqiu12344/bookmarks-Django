# Generated by Django 4.2.6 on 2023-11-13 09:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('images', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='created',
            field=models.DateField(auto_now_add=True, db_index=True),
        ),
    ]
