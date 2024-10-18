from django import forms
from snippets.models import Transaction

# Create Add Transaction Form
class AddTransactionForm(forms.ModelForm):
    description = forms.CharField(required=True, widget=forms.widgets.TextInput(attrs={"placeholder":"Description", "class":"form-control"}), label="")
    category = forms.CharField(required=True, widget=forms.widgets.TextInput(attrs={"placeholder":"Category", "class":"form-control"}), label="")
    amount = forms.CharField(required=True, widget=forms.widgets.TextInput(attrs={"placeholder":"Amount", "class":"form-control"}), label="")
    
    class Meta:
        model = Transaction
        fields = ('description', 'category', 'amount')

