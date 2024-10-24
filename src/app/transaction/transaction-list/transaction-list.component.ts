import { Component, OnInit } from '@angular/core';
import { AddTransactionsComponent } from '../add-transactions/add-transactions.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [AddTransactionsComponent, HttpClientModule, CommonModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css',
})
export class TransactionListComponent implements OnInit {
  title = 'Bank of Flatiron';
  url: string = '/api/transactions/';
  transactions: any

  constructor(private http: HttpClient) {}

  getTransactions() {
    this.http.get(this.url).subscribe({
      next: (data) => {
        this.transactions = data 
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit() {
    this.getTransactions();
  }
}
