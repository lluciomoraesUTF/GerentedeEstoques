from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    SupplierViewSet, ProductViewSet, 
    CustomerViewSet, SaleViewSet, UserViewSet, CustomAuthToken
)

router = DefaultRouter()
router.register(r'suppliers', SupplierViewSet)
router.register(r'products', ProductViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'sales', SaleViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),  # Inclui as rotas da API
    path('api/login/', CustomAuthToken.as_view(), name='api_login'),  # Endpoint de login
]
