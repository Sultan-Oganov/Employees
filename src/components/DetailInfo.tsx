import React, { FunctionComponent } from 'react';
import { Heading, Flex, Input, Button, Alert, AlertIcon, Select } from "@chakra-ui/react";
import store, { Employee } from "../store";
import { useState } from 'react';
import { observer } from 'mobx-react';

const DetailInfo: FunctionComponent = (props: any) => {

    const [status, setStatus] = useState(false)

    return (
        <Flex mt={5} >
            <div style={{}}>
                <Heading size="lg">
                    Detail Information
                </Heading>
                {
                    store.employees.map((el: Employee) => {
                        return el.id == props.match.params.id ?
                            <div
                                style={{ width: '100%', margin: '50px auto', padding: '20px', border: '1px solid gray', borderRadius: '10px' }}
                            >
                                {
                                    status ?
                                        <Alert status="success">
                                            <AlertIcon />
                                            Data uploaded to the server. Fire on!
                                        </Alert>
                                        : null
                                }

                                <Heading my={5} size="md">Full name:</Heading>
                                <Input value={el.fullName}
                                    onChange={(event) => el.fullName = event.target.value}
                                />
                                <Heading my={5} size="md">Date of birth:</Heading>
                                <Input value={el.dateOfBirth}
                                    onChange={(event) => el.dateOfBirth = event.target.value}
                                />
                                <Heading my={5} size="md">Sex:</Heading>
                                <Select placeholder="Sex" value={el.sex} onChange={(event) => el.sex = event.target.value}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </Select>
                                <Heading my={5} size="md">Position:</Heading>
                                <Select placeholder="Position" value={el.position} onChange={(event) => el.position = event.target.value}>
                                    <option value="projectManager">Project Manager</option>
                                    <option value="frontEnd">Front-end</option>
                                    <option value="backEnd">Back-end</option>
                                </Select>
                                <Heading my={5} size="md">Busyness:</Heading>
                                <Select placeholder="Busyness" value={el.busyness} onChange={(event) => el.busyness = event.target.value}>
                                    <option value="full ">Full</option>
                                    <option value="partTime">Part-time</option>
                                </Select>
                                <Button mt={5} px={20} colorScheme="blue" onClick={() => {
                                    setStatus(true)
                                    store.update()
                                }}>Save Changes</Button>

                            </div>
                            : null
                    }
                    )

                }
            </div>




        </Flex >

    );
};

export default observer(DetailInfo);