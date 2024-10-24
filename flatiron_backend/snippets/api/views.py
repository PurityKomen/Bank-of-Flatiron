from django.http import HttpResponse, JsonResponse
from rest_framework.parsers import JSONParser
from snippets.models import Transaction
from.serializers import TransactionSerializer
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def transaction_list(request):
    """
    List all transaction list or create a new transaction
    """
    if request.method == 'GET':
        transaction = Transaction.objects.all()
        serializer = TransactionSerializer(transaction, many=True)
        return JsonResponse(serializer.data, safe=False)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        print(f"python {data}")
        serializer = TransactionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

def transaction_detail(request, pk):
    """
    Retrieve, update or delete a transaction
    """
    try:
        transaction = Transaction.objects.get(pk=pk)
    except Transaction.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = TransactionSerializer(transaction)
        return JsonResponse(serializer.data)

    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = TransactionSerializer(transaction, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)

    elif request.method == 'DELETE':
        transaction.delete()
        return HttpResponse(status=204)
