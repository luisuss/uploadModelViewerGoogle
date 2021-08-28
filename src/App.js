import { Fragment } from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { Restore, Favorite, LocationOn, Folder, AllOut, AddAPhoto} from "@material-ui/icons";
import {LinksModels} from './assets/mockData';
import { useState } from "react";

function App() {

  const[modelSelected, setModelSelected] =  useState(LinksModels[0]);

  const onSelectModel = (linkModelSelected)  => {
    console.log(linkModelSelected);
    setModelSelected(linkModelSelected)
  };

  return (

   
  <Fragment>

<model-viewer
 src={modelSelected} // AR Android
//ios-src=' ' // AR IOS
auto-rotate
camera-controls
style={
            {width:'100%',
            height:'600px' }
          }
>

 
      <BottomNavigation>
        {LinksModels.map((link)=>{
          return(

            <BottomNavigationAction
            label="Recents"
            icon={<Restore />} 
            onClick={( ) => onSelectModel(link)}
            />
            );
        })}
        <BottomNavigationAction
            label="Recents"
            icon={< AddAPhoto />} 
              slot= 'ar-button'
            />
            );

        
        
    </BottomNavigation>
    </model-viewer>



  </Fragment>
  );
}

export default App;
