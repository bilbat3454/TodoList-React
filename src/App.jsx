import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {  
  let todos = [
    'Go to the gym',
    'Eat more fruits and veggies',
    'Pick up the kids from school'
]

  return (
    <>
      <TodoInput />
      <TodoList />
    </>
  )
}

export default App
