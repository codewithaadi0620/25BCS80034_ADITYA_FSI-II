import { UserContext } from './contexts/UserContext';
import Dashboard from './components/Dashboard';

function App() {
  const user = {
    name: 'Karan Mehta',
    email: 'karan@gmail.com',
    program: 'Web Development',
  };

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Dashboard />
      </div>
    </UserContext.Provider>
  );
}
export default App;
