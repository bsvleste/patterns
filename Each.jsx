import { Children } from "react";

export const Each = ({render,of})=>
Children.toArray(of.map((item,index)=> render(item,index)))

//how to use

<ul>
  <Each of={arrayOfData} render={(item,index)=>
    <li>{item.title}</li>  
    }/>
</ul>