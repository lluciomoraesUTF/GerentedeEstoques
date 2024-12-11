from rest_framework.permissions import BasePermission

class IsAdminOrReadOnly(BasePermission):
    """
    Permissão personalizada para permitir apenas admins criarem, editarem ou deletarem recursos.
    Usuários normais podem apenas ler.
    """
    def has_permission(self, request, view):
        # Permitir leitura para todos (GET, HEAD ou OPTIONS)
        if request.method in ['GET', 'HEAD', 'OPTIONS']:
            return True
        # Permitir modificações apenas para admins
        return request.user and request.user.is_staff
