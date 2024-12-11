from rest_framework.routers import DefaultRouter
from .views import SupplierViewSet, ProductViewSet, CustomerViewSet, SaleViewSet, UserViewSet
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from django.urls import path

router = DefaultRouter()
router.register(r'suppliers', SupplierViewSet)
router.register(r'products', ProductViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'sales', SaleViewSet)
router.register(r'users', UserViewSet)

urlpatterns = router.urls

# Adicione também as rotas para autenticação JWT
urlpatterns += [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
