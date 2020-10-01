from django.urls import path
from posts import views

urlpatterns = [
    path(
      route='posts/', 
      view=views.PostFeedView.as_view(), 
      name='feed'
      ),
    path(
      route='posts/new/', 
      view=views.create_post, 
      name='create'
      ),
]