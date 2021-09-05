import * as React from "react";
import { ChakraProvider, Box, theme, Heading } from "@chakra-ui/react";
import TopBar from "./components/TopBar";
import EmployeeAdd from "./components/EmployeeAdd";
import EmployeeList from "./components/EmployeeList";
import { Route, Switch } from "react-router";
import DetailInfo from "./components/DetailInfo";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar />
        <Heading>Employees</Heading>
        <EmployeeAdd />
        <Switch>
          <Route exact path="/" component={EmployeeList} />
          <Route exact path="/detail/:id" component={DetailInfo} />
        </Switch>
      </Box>
    </ChakraProvider>
  );
}

export default App