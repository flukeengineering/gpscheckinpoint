# Generated by Django 3.0.8 on 2020-09-16 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dormitory', '0008_auto_20200916_1516'),
    ]

    operations = [
        migrations.AlterField(
            model_name='choice',
            name='name',
            field=models.CharField(choices=[('การจดทะเบียนขออนุญาตผู้ประกอบกิจการหอพัก', 'การจดทะเบียนขออนุญาตผู้ประกอบกิจการหอพัก'), ('โซนหอพัก', 'โซนหอพัก'), ('ประเภทของหอพัก', 'ประเภทของหอพัก'), ('ลักษณะของหอพัก', 'ลักษณะของหอพัก'), ('ลักษณะการเข้าพักอาศัย', 'ลักษณะการเข้าพักอาศัย'), ('สิ่งอำนวยความสะดวกภายในหอพัก ', 'สิ่งอำนวยความสะดวกภายในหอพัก'), ('ระบบรักษาความปลอดภัย', 'ระบบรักษาความปลอดภัย'), ('ทำอาหารในหอพักได้หรือไม่', 'ทำอาหารในหอพักได้หรือไม่'), ('เลี้ยงสัตว์เลี้ยงในหอพักได้หรือไม่', 'เลี้ยงสัตว์เลี้ยงในหอพักได้หรือไม่'), ('การเผยแพร่ข้อมูลหอพัก', 'การเผยแพร่ข้อมูลหอพัก')], max_length=100, verbose_name='ประเภทตัวเลือก'),
        ),
    ]
