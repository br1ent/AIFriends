from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from web.models.character import Character
from web.views.utils.photo import remove_old_photo
from django.utils.timezone import now


class UpdateCharacterView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        try:
            character_id = request.data.get('character_id')
            character = Character.objects.get(id=character_id, author__user=request.user)

            name = request.data.get('name').strip()
            profile = request.data.get('profile').strip()[:100000]
            photo = request.data.get('photo', None)
            background_image = request.data.get('background_image', None)

            if not name:
                return Response({
                    "result": "角色名字不能为空!"
                })

            if not profile:
                return Response({
                    "result": "角色简介不能为空!"
                })

            if not photo:
                return Response({
                    "result": "角色头像不能为空!"
                })

            if not background_image:
                return Response({
                    "result": "聊天背景不能为空!"
                })

            character.name = name
            character.profile = profile
            if photo:
                remove_old_photo(character.photo)
                character.photo = photo
            if background_image:
                remove_old_photo(character.background_image)
                character.background_image = background_image
            character.create_time = now()
            character.save()

            return Response({
                "result": "success"
            })

        except:
            return Response({
                "result": "系统错误,请稍后再试!"
            })
