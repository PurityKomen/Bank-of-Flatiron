# Bank of Flatiron
An angular application that displays a list of your recent bank transactions, among other features.

## Setup

- Run npm install in your terminal.
- In a new terminal, run npm start. This will run your Angular App on port 4200

## Technologies Used

1. Angular(Frontend)
2. Django(Backend)
3. Bootstrap(Styling)
4. VSCode(Editor)

## Core Deliverables

As a user, I should be able to:

1. See a table of the transactions.

2. Fill out and submit the form to add a new transaction. This should add the new transaction to the table as well as post the new transaction to the backend API for persistence.

3. Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.


## Endpoints for Core Deliverables

1. GET /transactions
Example Response:

[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]


2. POST /transactions
Required Headers:

{
  "Content-Type": "application/json"
}
Request Object:

{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
Example Response:

{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}

## Advanced Deliverables

As a user, I should be able to:

1. Sort transactions alphabetically by category or description.

2. Delete a transaction which will remove it from the table and delete it from the backend.

## Endpoints for Advanced Deliverables

1. DELETE /transactions/:id
Example Response:

{}

## License
This project uses MIT License
