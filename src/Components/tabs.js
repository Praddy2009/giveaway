import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import  Welcomehome  from './welcomehome';
import Sheets from './Sheets';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Books" {...a11yProps(1)} />
          <Tab label="Form" {...a11yProps(2)} />          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Welcomehome/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Sheets/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="tabs-forms">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc5XSGviHoW-aVrdnwqbGpmCaVydw0jYl-8-nx947Cabb7Tbg/viewform?embedded=true" width="100%" height="500px" frameborder="0" marginheight="0" marginwidth="0" title="Form">Loading…</iframe>
        </div>
      </TabPanel>
    </Box>
  );
}
