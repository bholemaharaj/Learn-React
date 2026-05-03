import { ActionButton } from "./ActionButton";
import "./styles.css";
// import { ChildrenWrapper } from './ChildrenWrapper';
// import { Greetings } from './Greetings';
// import { MyList } from './MyListItems';
// import { People } from './PersonList';
// import { Contact } from "./Contact";
// import { NewsLetter } from "./NewsLetter";
// import { Menu } from "./Menu";
// import { CustomButton } from "./CustomButton";
import { CounterPrevState } from "./CounterPrevState";

function App() {
  return (
    <>
      {/* <MyList items={People} />
      <ChildrenWrapper>
      <h4>This is some additional content for the user card.</h4>
      <p>Users Hobbies: Plays guitar, piano etc.</p>
      <h2>
        <Greetings name="Dudismo" greeting="Whatsaaaap" />
      </h2>
    </ChildrenWrapper> */}
      {/* <CustomButton />
      <Contact />
      <NewsLetter />
      <Menu /> */}
      <CounterPrevState />
      <ActionButton text="Click me!" onClick={() => alert("Button clicked!")} />
    </>
  );
}

export default App;
