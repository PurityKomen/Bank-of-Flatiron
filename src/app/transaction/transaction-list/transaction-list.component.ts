import { Component } from '@angular/core';
import { AddTransactionsComponent } from '../add-transactions/add-transactions.component';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [AddTransactionsComponent],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent {
  title = 'Bank of Flatiron'
}
