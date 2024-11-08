from django.apps import AppConfig


class UniappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'uniapp'

    def ready(self):
        """
        This method is called when the app is ready. You can use it to
        connect signals or perform other setup tasks for your app.
        """