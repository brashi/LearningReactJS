import React, {useState} from "react";
import { Button, FormControl, Input} from '@mui/material';

export default function Form(props) {
    const [name, setName] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name)
        setName("")
    }
    function handleChange(e) {
        setName(e.target.value);
    }

    return (
        <FormControl onSubmit={handleSubmit} fullWidth={true}>
            <h2 className="label-wrapper" style={{textAlign: 'center'}}>
                <label htmlFor="new-todo-input">
                    digite a tarefa a fazer 
                </label>
            </h2>
            <Input
                type = "text" 
                id = "new-todo-input"
                className = "input input__lg"
                name = "text"
                autoComplete = "off"
                value = {name}
                onChange = {handleChange}
            />
            <Button type = "submit" className="btn btn__primary btn__lg"
                onClick={handleSubmit}>
                Adicionar
            </Button>
        </FormControl>
    );
}