import { User } from "../models/user";
import { LoginCredentials } from "../network/notes_api";
import { useForm } from "react-hook-form";
import * as NotesApi from "../network/notes_api";
import { on } from "events";
import { Modal, Form, Button, Alert } from "react-bootstrap";
import TextInputField from "./form/TextInputField";
import styleUtils from "../styles/utils.module.css";
import { useState } from "react";
import { UnauthorizedError } from "../errors/http_errors";

interface LoginModalProps {
    onDismiss: () => void;
    onLoginSuccessful: (user: User) => void;
}

const LoginModal = ({onDismiss, onLoginSuccessful} : LoginModalProps) => {

    const [errorText, setErrorText] = useState<string | null>(null);

    const { register, handleSubmit, formState: {errors, isSubmitting}} =useForm <LoginCredentials>();
    
    async function onSubmit(credentials: LoginCredentials) {
        try {

            const user = await NotesApi.login(credentials);
            onLoginSuccessful(user);
        } catch (error) {
            if(error instanceof UnauthorizedError) 
            {setErrorText(error.message);}
            else{
            alert(error);

        }
        console.error(error)}
    }
    
    return ( 
        <Modal show onHide={onDismiss}>
            <Modal.Header closeButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {errorText &&
                <Alert variant="danger">
                    {errorText}
                </Alert>
                }
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <TextInputField
                        name="username"
                        label="Username"
                        type="text"
                        Placeholder="Enter Username"
                        register={register}
                        registerOptions={{ required: "Please enter a username" }}
                        error={errors.username}
                        />
                     <TextInputField
                        name="password"
                        label="Password"
                        type="password"
                        Placeholder="Enter Password"
                        register={register}
                        registerOptions={{ required: "Please enter a Password" }}
                        error={errors.password}
                        />
                                  <Button
            type="submit"
            disabled={isSubmitting}
            className={styleUtils.width100}
          >
            Log In
          </Button>
                </Form>

                    </Modal.Body>
                    </Modal>
     );
}
    

 
export default LoginModal;