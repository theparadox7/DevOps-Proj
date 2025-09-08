from django.http import JsonResponse

def inventory_view(request):
    data = {
        "item": "Steel Rods",
        "quantity": 1200,
        "status": "Available"
    }
    return JsonResponse(data)
