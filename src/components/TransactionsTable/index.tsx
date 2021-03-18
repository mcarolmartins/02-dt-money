import { Container } from "./styles";

export function TransactionsTable(){
  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>


        <tbody>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className="deposit">R$ 1.000</td>
            <td>Tecnologia</td>
            <td>18/03/2021</td>
          </tr>

          <tr>
            <td>Cartão de crédito</td>
            <td className="withdraw">- R$ 200</td>
            <td>Cartões</td>
            <td>18/03/2021</td>
          </tr>

        </tbody>
      </table>
    </Container>
  );
}