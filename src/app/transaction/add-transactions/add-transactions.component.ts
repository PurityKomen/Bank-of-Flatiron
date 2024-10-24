import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-transactions',
  standalone: true,
  imports: [FormsModule, HttpClientModule,CommonModule, ReactiveFormsModule],
  templateUrl: './add-transactions.component.html',
  styleUrl: './add-transactions.component.css',
})
export class AddTransactionsComponent implements OnInit {
  date: any;
  description: string | undefined;
  category: string | undefined;
  amount: number = 0;
  loading: boolean = false;
  url: string = '/api/transactions/';
  addTransactionsForm!: FormGroup

  constructor(private http: HttpClient, public fb: FormBuilder) {}

  addTransactions() {
    this.loading = true;
    const body = {
      date: this.addTransactionsForm.value.date,
      description: this.addTransactionsForm.value.description,
      category: this.addTransactionsForm.value.category,
      amount: this.addTransactionsForm.value.amount,
    };
    this.http.post(this.url, body).subscribe({
      next: () => {
        this.loading = false;
        this.addTransactionsForm.reset()
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  ngOnInit() {
    /**
         * Validations for ChangePasswordForm
         */
    this.addTransactionsForm = this.fb.group(
      {
          date: ['', Validators.required],
          description: [
              '',
              [Validators.required, Validators.minLength(8)],
          ],
          category: [
              '',
              [Validators.required, Validators.minLength(4)],
          ],
          amount: [
            '',
            [Validators.required],
        ],
      },
  );
  }
}
