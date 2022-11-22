import ReactDOM from 'react-dom/client';

function Welcome(props) {
  return (
    <h1>
      Hello,
      {' '}
      {props.name}
    </h1>
  );
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Edite" />
      <Welcome name="Cahal" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// root.render(<App />);
