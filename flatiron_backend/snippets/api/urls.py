from django.urls import path
from . import views

urlpatterns = [
    path('transactions/', views.transaction_list),
    path('transactions/<str:pk>/', views.transaction_detail),
]

