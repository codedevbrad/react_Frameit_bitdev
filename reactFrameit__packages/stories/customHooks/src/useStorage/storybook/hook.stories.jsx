import { useSessionStorage, useLocalStorage } from "../hook/index";

function StorageComponent() {
  const [name, setName, removeName] = useSessionStorage("name", "Kyle")
  const [age, setAge, removeAge] = useLocalStorage("age", 26)

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("John")}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  )
}

export default {
    title: 'Hooks/useStorage' ,
    component: StorageComponent ,
    argTypes: { }
};

const Template = (args) => <StorageComponent {...args} />;

export const Hook = Template.bind({});

Hook.args = {
    name: 'harry'
 };
