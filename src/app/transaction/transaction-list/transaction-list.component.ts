import { Component, OnInit } from '@angular/core';
import { AddTransactionsComponent } from '../add-transactions/add-transactions.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [AddTransactionsComponent, HttpClientModule, CommonModule, FormsModule],
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css',
})
export class TransactionListComponent implements OnInit {
  title = 'Bank of Flatiron';
  url: string = '';
  transactions: any
  searchText: string | undefined

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

  searchKey(data: any | undefined) {
    this.searchText = data 
  }

  search(){
    this.transactions = this.searchText === undefined ? this.transactions : this.transactions?.filter((element: { description: string; }) => {
      return element.description.toLowerCase() == this.searchText?.toLowerCase();
    });
  }

  ngOnInit() {
    this.getTransactions();
    this.search()
  }
}
