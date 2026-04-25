from django.conf import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

# 主要作用是刷新refresh_token,只要用户在7天之内登录过,会自动延长refresh_token,用户不需要重新登录
class RefreshTokenView(APIView):
    def post(self, request):
        try:
            refresh_token = request.cookies.get('refresh_token')
            if not refresh_token:
                return Response({
                    "result": "refresh token不存在!"
                }, status=401)

            refresh = RefreshToken(refresh_token) # 自动检查是否过期，如果过期自动报异常

            if settings.SIMPLE_JWT["ROTATE_REFRESH_TOKENS"]:
                refresh.set_jti()
                response = Response({
                    "result": "success",
                    "access": str(refresh.access_token)
                })
                response.set_cookie(
                    key="refresh_token",
                    value=str(refresh.access_token),
                    httponly=True,
                    samesite="Lax",
                    secure=True,
                    max_age=86400 * 7,
                )
                return response

            return Response({
                "result": "success",
                "access": str(refresh.access_token)
            })
        except:
            return Response({
                "result": "refresh token过期了!"
            }, status=401)