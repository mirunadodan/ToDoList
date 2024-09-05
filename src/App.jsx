import './App.css';
import WeeklyToDo from './components/WeeklyToDo';

const colors = [
  '#F2EFE5',
  '#C7C8CC',
  '#E3E1D9',
  '#96B6C5',
  '#ADC4CE',
  '#EEE0C9',
  '#F1F0E8',
  '#CCD3CA',
  '#F5E8DD',
  '#B5C0D0',
  '#8ecae6',
  '#ffb703',
  '#219ebc',
  '#fefae0',
  '#669bbc',
  '#f4a261',
  '#e76f51',
  '#2a9d8f'
]

function App() {


  return (
    <>
    <WeeklyToDo colors={colors}/>
    </>
  )
}

export default App
