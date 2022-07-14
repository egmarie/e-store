from django.urls import path

from . import views

app_name = 'notes'
urlpatterns = [
    path('notes/', views.NotesListView.as_view(), name='notes-list'),
    path('notes/<int:pk>', views.NotesDetailView.as_view(), name='notes-detail'),
    path('notes/<int:pk>/edit', views.NotesUpdateView.as_view(), name='notes-update'),
    path('notes/<int:pk>/delete', views.NotesDeleteView.as_view(), name='notes-delete'),
    path('notes/new', views.NotesCreateView.as_view(), name='notes-new'),
    path('notes/api', views.NotesListAPI, name='notes-api'),

]