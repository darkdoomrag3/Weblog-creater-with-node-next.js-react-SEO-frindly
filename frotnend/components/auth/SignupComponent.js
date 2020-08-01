import React, { useState } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const SignupComponent = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        loading: false,
        error: '',
        message: '',
        showForm: true
    })

    const { name, email, password, error, message, loading, showForm } = values



    const handelSubmit = (e) => {
        e.preventDefault()
        console.table({ name, email, password, error, message, loading })

    }

    const handelChange = name => e => {

        setValues({ ...values, error: false, [name]: e.target.value })

    }


    const SignupForm = () => {



        return (

            <Form onSubmit={handelSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input onChange={handelChange('name')} value={name} type="text" name="name" placeholder="Enter your name" />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input onChange={handelChange('email')} value={email} type="email" name="email" placeholder="Enter your emsil" />
                </FormGroup>


                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input onChange={handelChange('password')} value={password} type="password" name="password" placeholder="enter your password" />
                </FormGroup>



                <Button color="primary">Submit</Button>
            </Form>

        )


    }






    return (
        <React.Fragment>
            {SignupForm()}
        </React.Fragment>
    )
}

export default SignupComponent
