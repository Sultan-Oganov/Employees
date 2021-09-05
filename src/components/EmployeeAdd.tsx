import * as React from "react";
import { Button, Input, Grid, Select } from "@chakra-ui/react";
import { observer } from "mobx-react";
import store from "../store";

const EmployeeAdd = () => {

  return (
    <div
      style={{ margin: '25px 0 0 0', padding: '25px 10px', border: '1px solid gray', borderRadius: '10px' }}
    >
      <Grid pt={2} templateColumns="1fr 1fr 1fr" gap="3">
        <Input
          placeholder="Full name"
          value={store.newFullName}
          onChange={(event) => store.newFullName = event.target.value}
        />

        <Input
          placeholder="Date of Birth"
          value={store.newDateOfBirth}
          onChange={(event) => store.newDateOfBirth = event.target.value}
        />

        <Select placeholder="Sex" value={store.newSex} onChange={(event) => store.newSex = event.target.value}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Select>

        <Select placeholder="Position" value={store.newPosition} onChange={(event) => store.newPosition = event.target.value}>
          <option value="projectManager">Project Manager</option>
          <option value="frontEnd">Front-end</option>
          <option value="backEnd">Back-end</option>
        </Select>

        <Select placeholder="Busyness" value={store.newBusyness} onChange={(event) => store.newBusyness = event.target.value}>
          <option value="full ">Full</option>
          <option value="partTime">Part-time</option>
        </Select>

        <Button
          onClick={() => store.addEmployee()}
        >Add</Button>
      </Grid>
    </div>
  );
}

export default observer(EmployeeAdd);
