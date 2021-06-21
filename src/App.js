import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/Eventbind'
import ParentComponent from './components/ParentComponent';
import Usergreetings from './components/Usergreetings';
import Namelist from './components/Namelist';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './ComponentCSS/appStyle.css';
import styles from './ComponentCSS/appStyle.module.css';
import Form from './components/Form.js';
import Parencomponent from './components/Parencomponent'
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import ParentForwardRefInput from './components/ParentForwardRefInput';
import PortalDemo from './components2/PortalDemo';
import Heroforerrorhandle from './components2/Heroforerrorhandle';
import Errorboundry from './components2/Errorboundry';
import Clickcounter from './higerordercomponent/Clickcounter';
import Hovercounter from './higerordercomponent/Hovercounter';
import Clickcountertwo from './RenderpropsComponent/Clickcountertwo';
import Hovercountertwo from './RenderpropsComponent/Hovercountertwo';
import User from './RenderpropsComponent/User';
import CounterHandler from './RenderpropsComponent/CounterHandler';
import ComponentC from './Context/ComponentC';
import { Userprovider } from './Context/UserContext';
import PostList from './HTTP REQUEST/PostList';
import Postform from './HTTP REQUEST/Postform';


function App() {
  return (
    <div className="App">
<Postform/>


      {/*}
<PostList/>

      <Userprovider value="sivanujan" > 
      {//default value set in createcontext method
   <ComponentC/>
   </Userprovider>

   
 //   WE can use render method also render() that time tage must be <tag/>
  <CounterHandler>
 {(count,incrementCount) => (
<Clickcountertwo count={count} incrementCount={incrementCount}/>
  )}
  </CounterHandler>
<CounterHandler>
 {(count,incrementCount) => (
<Hovercountertwo count={count} incrementCount={incrementCount}/>
  )}
 </CounterHandler>


<Clickcountertwo />
    <Hovercountertwo/>
    <User render={(isLoggedin)=> isLoggedin ? 'Sivanujan':'Guest'}/>
     

        <Clickcounter />
      <Hovercounter name="Sivanujan" />

       <Errorboundry>
        <Heroforerrorhandle heroname="batman"/>
      </Errorboundry>
      <Errorboundry>
        <Heroforerrorhandle heroname="Sivanujan"/>
      </Errorboundry>
      <Errorboundry>
        <Heroforerrorhandle heroname="joker"/>
      </Errorboundry> 

      <PortalDemo/>

 <ParentForwardRefInput />

                 <FocusInput/>
 <RefsDemo/>

       <Parencomponent /> 

 <Form/>

        <h1 className='error'>error</h1>

    <h1 className={styles.sucess}>sucess</h1>

       <Inline/>

           <Stylesheet primary={true} />
 
      <Namelist/>

      <Usergreetings/>

      <ParentComponent/> 

        <EventBind/>

      <ClassClick/>
    
       <Counter addValue={20} />

<Message />

 <Greet name="Sivanujan" heroname="errumai">

   <p>Sivanujan oru loosu</p>

   </Greet>
 <Greet name="ennamo" heroname="panni">
   <button> action </button>
   </Greet>

 <Greet name="eetho" heroname="maadu"/>

 <Welcome name="clz.Sivanujan1" heroname="errumai1"/>
 <Welcome name="clz.Sivanujan2" heroname="errumai2"/>
 <Welcome name="clz.Sivanujan3" heroname="errumai3"/>
 
 <Hello/>*/}
    </div>
  );
}

export default App;
