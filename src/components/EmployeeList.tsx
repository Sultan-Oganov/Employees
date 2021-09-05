import * as React from "react";
import { Button, Input, Flex } from "@chakra-ui/react";
import { observer } from "mobx-react";
import store, { Employee } from "../store";
import { Link } from "react-router-dom";

const EmployeeListItem = () => {
  return (
    <>
      {store.employees.map((todo: Employee) => (

        <div
          key={todo.id}
          style={{ display: 'block', margin: '25px 0 0 0', padding: '25px', border: '1px solid gray', borderRadius: '10px' }}
        >
          <Flex flexFlow="column wrap" justifyContent="space-between" >
            <Input my={2} value={todo.fullName} />
            <Input my={2} value={todo.position} />
            <Input my={2} value={todo.busyness} />
            <Button
              my={2}
              onClick={() => store.removeTodo(todo.id)}
            >Delete
            </Button>
            <Button
              my={2}
            >
              <Link
                style={{ display: 'block', width: '100%', height: '100%', marginTop: '17px' }}
                to={`/detail/${todo.id}`}
              >
                More info
              </Link>
            </Button>
          </Flex>
        </div>


      ))}
    </>
  );
}

const EmployeeListItemsObserver = observer(EmployeeListItem)

const EmployeeList = () => {
  return (
    <>
      <EmployeeListItemsObserver />
    </>
  );
}

export default EmployeeList;
