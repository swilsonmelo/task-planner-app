import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import "./Todo.css"

export class Todo extends React.Component {

    render() {
        return (
            <Card style={{marginTop: "10px"}}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                    {this.props.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                    {" Date " + this.props.dueDate.format('DD-MM-YYYY')}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
                    {" Status " + this.props.status}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" component="p">
                    {" Name responsible " + this.props.responsible.name}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
                    {" Email responsible " + this.props.responsible.email}
            </Typography>
        </CardContent>
        </Card>
        );
    }

}