import { Component, OnInit } from '@angular/core';
import { AddTransactionsComponent } from '../add-transactions/add-transactions.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [AddTransactionsComponent, HttpClientModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css',
})
export class TransactionListComponent implements OnInit {
  title = 'Bank of Flatiron';
  url: string = 'http://127.0.0.1:8000/transactions/';

  constructor(private http: HttpClient) {}

  getTransactions() {
    this.http.get(this.url).subscribe({
      next: (data) => {
        console.log(data);
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
