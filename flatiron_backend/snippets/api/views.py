from rest_framework.decorators import api_view
from rest_framework.response import Response
from.serializers import TransactionSerializer
from django.contrib import messages
from .forms import AddTransactionForm

@api_view(['GET','POST'])
def getRoutes(request):
    routes = [
        'GET /api',
        'GET /api/transactions',
        'GET /api/transactions/:id',
        'POST /api/transactions/add',
    ]
    return Response(routes)

@api_view(['GET'])
def getTransactions(request):
    transactions = Transaction.objects.all()
    serializer = TransactionSerializer(transactions, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getTransaction(request, pk):
    transaction = Transaction.objects.get(id=pk)
    serializer = TransactionSerializer(transaction, many=False)
    return Response(serializer.data)

@api_view(['POST'])
def addTransactions(request):
    form = AddTransactionForm(request.POST or None)
    if request.method == "POST":
        if form.is_valid():
            add_record = form.save()
            messages.success(request, "Transaction Added...")