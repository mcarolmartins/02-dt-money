import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Celular Galaxy S10+',
          type: 'withdraw',
          category: 'Compras',
          amount: 2100,
          createdAt: new Date('2021-03-06 09:30:00'),
        },
        {
          id: 2,
          title: 'Desenvolvimento de sistema para Android',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 5300,
          createdAt: new Date('2021-03-10 19:00:00'),
        },
        {
          id: 3,
          title: 'Cartão de crédito',
          type: 'withdraw',
          category: 'Pagamentos',
          amount: 400,
          createdAt: new Date('2021-03-12 14:30:00'),
        },
        {
          id: 4,
          title: 'Troca de HD, fonte e memória RAM',
          type: 'deposit',
          category: 'Recebimentos',
          amount: 150,
          createdAt: new Date('2021-03-12 22:50:00'),
        },
      ],
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data);
    })
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
