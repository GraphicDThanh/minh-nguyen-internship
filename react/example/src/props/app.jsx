import ListExpenses from './list-expenses';

const data = [
  {
    id: 'e1',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e2',
    title: 'New Home',
    amount: 20000,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e3',
    title: 'Football',
    amount: 50,
    date: new Date(2021, 7, 16),
  },
  {
    id: 'e4',
    title: 'Covid vacxin',
    amount: 80,
    date: new Date(2021, 1, 22),
  },
];

function App() {
  console.log(1);
  return (
    <div className="App">
      <ListExpenses data={data} />
    </div>
  );
}

export default App;
