import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import moment from "moment";
import React, { Component } from 'react';
import { TodoList } from "./TodoList";
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';



export class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], description: '', status: '', dueDate: moment(), name: '', email: '', open: false };
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.hanldeNameResponsibleChange = this.hanldeNameResponsibleChange.bind(this);
        this.hanldeEmailResponsibleChange = this.hanldeEmailResponsibleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

    render() {
        return (
            <div>
                <TodoList todoList={this.state.items} />

                <Fab onClick={this.handleOpen} style={{ position: "absolute", right: "0px", bottom: "0", margin: "10px" }}>
                    <AddIcon></AddIcon>
                </Fab>
                <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.open}>
                    <form onSubmit={this.handleSubmit} className="todo-form" style={{ width: "100%" }}>
                        <h3>New TODO</h3>
                        <TextField
                            id="text"
                            label="Description"
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                            margin="normal" />
                        <br />
                        <TextField
                            id="name"
                            label="Responsible Name"
                            value={this.state.name}
                            onChange={this.hanldeNameResponsibleChange}
                            margin="normal" />
                        <br />
                        <TextField
                            id="email"
                            label="Responsible Email"
                            value={this.state.email}
                            onChange={this.hanldeEmailResponsibleChange}
                            margin="normal" />
                        <br />
                        <TextField
                            id="priority"
                            label="Status"
                            value={this.state.status}
                            onChange={this.handleStatusChange}
                            margin="normal" />
                        <br />
                        <TextField
                            id="due-date"
                            label="Due-Date"
                            type="date"
                            defaultValue={this.state.dueDate.format('YYYY-MM-DD')}
                            onChange={this.handleDateChange}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }} />
                        <br />
                        <Button variant="outlined" color="secondary" type="submit">
                            Add #{this.state.items.length + 1}
                        </Button>
                    </form>
                </Dialog>
            </div >
        );
    }

    handleOpen(e) {
        this.setState({ open: true });
    }

    handleClose(e) {
        this.setState({ open: false });
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleStatusChange(e) {
        this.setState({
            status: e.target.value
        });
    }

    handleDateChange(e) {
        this.setState({
            dueDate: moment(e.target.value, 'YYYY-MM-DD')
        });
    }

    hanldeEmailResponsibleChange(e) {
        this.setState({ email: e.target.value });
    }

    hanldeNameResponsibleChange(e) {
        this.setState({ name: e.target.value });
    }

    handleSubmit(e) {

        e.preventDefault();
        console.log(this.state);

        if (!this.state.description.length || !this.state.status.length || !this.state.dueDate)
            return;

        const newItem = {
            description: this.state.description,
            status: this.state.status,
            dueDate: this.state.dueDate,
            responsible: { name: this.state.name, email: this.state.email }

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            description: '',
            status: '',
            dueDate: moment(),
            name: '',
            email: '',
            open: false
        }));


    }

    componentDidMount() {
        this.setState(prevState => ({
            items: prevState.items.concat(this.props.todoList),
        }))
    }
}