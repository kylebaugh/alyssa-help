import React, {useState} from 'react';
import Draggable, {DraggableCore} from 'react-draggable';
import Tables from './Tables.jsx';
import Chair from './Chair.jsx';
import NewApp from './NewApp.jsx';
// import Test from './Test.jsx'

class App extends React.Component {

  // const [tables, setTables] = useState([])
  // const [newTable, setNewTables] = useState([])

  render() {
    return (
      // <div className='container'>

      <div>

        <NewApp />
      </div>

        /* <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[1, 1]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}
        // bounds="parent"
        allowAnyClick={false}
        >
        <div >
          <NewApp />
        </div>
      </Draggable> */
      // </div>
    )
  }
}
export default App


// import {useState} from 'react'
// const [position, setPosition] = useState({x: 0, y: 0})
// const trackPos = (data) => {
//   setPosition({x: data.x, y: data.y})
// }
// <Draggable onDrag = {(e, data) => trackPos(data)} ></Draggable>
//https://lo-victoria.com/making-draggable-components-in-react
//how to track location of item