from django.urls import path
from account import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('register/', views.registration, name='register'),
    path('login/', auth_views.LoginView.as_view(), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('', views.dashboard, name='dashboard'),
    path('edit/', views.edit, name='edit'),
]