# Generated by Django 3.0.6 on 2020-07-15 20:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0011_volunteer_event'),
    ]

    operations = [
        migrations.AlterField(
            model_name='volunteer',
            name='organization',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='login.Organization'),
        ),
    ]
