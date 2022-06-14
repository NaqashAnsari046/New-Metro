import 'bootstrap/dist/css/bootstrap.min.css'; 
import Text from './Components/Contect/Text';
import {Route,Switch} from 'react-router-dom';
import Gallery from './Components/RouterBody/Gallery/Gallery';
import Agents from './Components/RouterBody/Agents/Agent';
import Project from './Components/RouterBody/Project/Pro1/BSM';



function App() {
  return (
    <div className="bg-light">
        {/* <Switch> */}
        <Route path='/' exact component={Text} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/agents' component={Agents} />
        <Route path='/project' component={Project} />
      {/* </Switch> */}
    </div>
  );
}

export default App;
