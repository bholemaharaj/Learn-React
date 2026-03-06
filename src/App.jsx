import './App.css';
import { ChildrenWrapper } from './ChildrenWrapper';
import { Greetings } from './Greetings';

function App() {
  return (
    <ChildrenWrapper>
      <h4>This is some additional content for the user card.</h4>
      <picture>Users Hobbies: Plays guitar, piano etc.</picture>
      <h2>
        <Greetings name="Dudismo" greeting="Whatsaaaap" />
      </h2>
    </ChildrenWrapper>
  );
}

export default App
