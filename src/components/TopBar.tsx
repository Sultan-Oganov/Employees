import * as React from "react";
import { Grid, Button } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import store from "../store";
import { Link } from "react-router-dom";

const TopBar = () => {

  const onLoad = () => {
    store.load()
  }
  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button onClick={onLoad}><Link to="/" style={{ width: '100%' }}>Get all employees</Link></Button>
    </Grid>
  );
}

export default TopBar;
