from django.db import models


class Todo(models.Model):
    title = models.CharField('内容', max_length=200)
    finished = models.BooleanField('完了済み', null=True)
    created_at = models.DateTimeField('作成日時', auto_now_add=True)
    updated_at = models.DateTimeField('更新日時', auto_now=True)

    class Meta:
        verbose_name = 'ToDo'
        verbose_name_plural = 'ToDos'

    def __str__(self):
        return self.title
