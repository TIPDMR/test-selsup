import './App.css'
import ParamEditor from "./ParamEditor.tsx";

const Params = [
  {
    "id": 1,
    "name": "Назначение",
    "type": "string"
  },
  {
    "id": 2,
    "name": "Длина",
    "type": "string"
  },
  {
    "id": 3,
    "name": "Цвет",
    "type": "string"
  }
]
const Model = {
  "paramValues": [
    {
      "paramId": 1,
      "value": "повседневное"
    },
    {
      "paramId": 2,
      "value": "макси"
    },
    {
      "paramId": 3,
      "value": "макси"
    }
  ]
}

function App() {

  return (
    <>
      <ParamEditor model={Model} params={Params}/>
    </>
  )
}

export default App
