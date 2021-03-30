import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DetailsList from '../DetailsList';
import ActionButtons from '../../Atoms/ActionButtons';
import SearchInput from '../../Atoms/SearchInput';
import 'react-tabs/style/react-tabs.css';
import './menu.css';
import Playlist from '../Playlist';

class MenuTabs extends React.Component {


    render(){
        return(
    <Tabs className="tab-container">
      <TabList>
        <Tab>All Songs</Tab>
        <Tab>Playlists</Tab>
      </TabList>
  
      <TabPanel>
        <div>
        { <SearchInput></SearchInput> }
        </div>
        <p>
        <DetailsList />
        </p>
      </TabPanel>

      <TabPanel>
      <div>
        <Playlist/>
        </div>
      </TabPanel>
    </Tabs>
);
};
          }
          export default MenuTabs;
  
