from rest_framework import serializers
from snippets.models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Transaction
        fields = ['id', 'description', 'category', 'amount', 'date']