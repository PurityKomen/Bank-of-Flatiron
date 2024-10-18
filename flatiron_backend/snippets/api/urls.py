from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes,name='getRoutes'),
    path('transactions/', views.getTransactions,name='getTransactions'),
    path('transactions/<str:pk>/', views.getTransaction,name='getTransaction'),
    path('transactions/add/', views.addTransactions, name='addTransactions'),
]

