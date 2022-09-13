import React from 'react';
import DynamicForm from './component/dynamic_form';
// import { CssBaseline, Container, Paper, Box } from "@mui/material";
import BasicArrayExample from "./component/arrayDynamic";
import ArrayList from "./component/arrydynmic1";

function App() {
  return (
      // <>
      //   <CssBaseline />
      //   <Container component={Box} p={4}>
      //     <Paper component={Box} p={3}>
      //       <DynamicForm/>
      //     </Paper>
      //   </Container>
      // </>
      <>
          <BasicArrayExample/>
          <ArrayList/>
      </>
      
  );
}

export default App;
