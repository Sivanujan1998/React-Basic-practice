import React from 'react'
import Person from './Person'

function Namelist() {
    const names =['siva','banu','ddd','siva']
    //map(parameter => function)
    const nameList=names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    const namejson=[
    {id:1,name:'sivanujan1',age:25,skill:'badminton1'},
    {id:2,name:'sivanujan2',age:25,skill:'badminton2'},
    {id:3,name:'sivanujan3',age:25,skill:'badminton3'},
    {id:4,name:'sivanujan4',age:25,skill:'badminton4'}
    ]

    return (
        <div> 
             <div>
        {nameList} 
        </div>
        <div>
      {
          namejson.map(per => <Person key={per.id} man={per}/>)
      }
        </div>
        </div>
    )
}

export default Namelist
