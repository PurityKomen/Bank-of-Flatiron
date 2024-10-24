import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TransactionListComponent } from './transaction/transaction-list/transaction-list.component';
import { AddTransactionsComponent } from './transaction/add-transactions/add-transactions.component';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    TransactionListComponent,
    AddTransactionsComponent,
    RouterOutlet,
    FormsModule,
    AppComponent,
    ReactiveFormsModule
  ],
  bootstrap: [],
  providers: [
    
  ],
})
export class AppModule {}
