import './App.css'
import styles from './styles/style.module.css'
import className from 'classnames'
import BasicClassComponent from './components/BasicClassComponent'
import ColorBasicComponent from './components/ColorBasicComponent'
function App() {
  let number = 1
  return (
    <div
      style={
        {
          // color: number === 0 ? `red` : 'blue',
          // backgroundColor: 'green',
          // display: 'flex',
          // justifyContent: 'center',
          // fontSize: `50px`,
        }
      }
      className={className(styles.newStyle, styles.newStyle1)}
    >
      <p>labas as krabas, o tu kebabas </p>
      <BasicClassComponent color="red" />
      <BasicClassComponent color="yellow" />
      <ColorBasicComponent color="green" bg="white" text="labas vakaras ryte" />
      <ColorBasicComponent color="green" bg="white" text="labas vakaras ryte" />
      <ColorBasicComponent color="green" bg="white" text="labas vakaras ryte" />
    </div>
  )
}

export default App
