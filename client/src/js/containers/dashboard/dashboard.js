import React, { Component } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import {GridItem, GridContainer, Input, Button, Table} from '../../components';
import Chip from '@material-ui/core/Chip';


const axios = require('axios');

import {styles} from './dashBoardStyle';


class DashboardClass extends React.Component {
	constructor(props) {
        super(props);

        this.state = {
            inputUnit: '',
            targetUnit: '',
            inputValue:'',
            studentResponse:'',
            result:'',
            isReady:false,
            actualResult:'',
        };
    }

    handleChange = (evt)=> {
        this.setState({ [evt.target.name]: evt.target.value,
        },()=>{
            if(this.state.inputUnit && this.state.targetUnit && this.state.inputValue && this.state.studentResponse ){
                this.setState({isReady:true})
            }else {
                this.setState({isReady:false})
            }
        });
    }

    getResult = () => {
        const {inputUnit, targetUnit, inputValue, studentResponse} = {...this.state}

        axios.post('http://localhost:5000/conversionApi',{
            inputValue:inputValue,
            inputUnit: inputUnit,
            targetUnit:targetUnit,
            studentResponse:studentResponse
        })
            .then((response)=> {
                this.setState({
                    result:response.data.status,
                    actualResult:response.data.actualResult,

                })
            })
            .catch( (error)=> {
                console.log(error);
            })
    }

	render(){
	    const {classes} = this.props;

	    let {result,actualResult,invalid} = this.state;
	    let html;
	    if(result){
            html = <div result = 'Correct'> <h3>Correct</h3></div>
        }else if(!result && actualResult) {
	        if(actualResult == 'Invalid'){
                html =   <div>
                    <h3>Invalid </h3>
                    <Table result = 'Invalid' data={this.state}></Table>
                </div>
            }else {
                html = <div>
                    <h3>Incorrect </h3>
                    <h5>Correct Answer: {actualResult}</h5>
                    <Table result = 'Incorrect' data={this.state}></Table>
                </div>
            }
        }
		return (
            <GridContainer >
                    <GridItem item lg={6} md={6} sm={12}>
                        <label>Input Numerical  Value</label>
                        <Input type='number' name='inputValue' placeholderText="Input Numerical  Value" handleChange={this.handleChange}></Input>
                    </GridItem>
                    <GridItem item lg={6} md={6} sm={12}>
                        <label>Input Unit of Measure</label>
                        <Input type='text' name='inputUnit' placeholderText="Input Unit of Measure" handleChange={this.handleChange}></Input>
                    </GridItem>
                    <GridItem item lg={6} md={6} sm={12}>
                        <label>Target Unit of Measure</label>
                        <Input type='text' name='targetUnit' placeholderText="Target Unit of Measure" handleChange={this.handleChange}></Input>
                    </GridItem>
                    <GridItem item lg={6} md={6} sm={12}>
                        <label>Student Response</label>
                        <Input type='number' name='studentResponse' placeholderText="Student Response" handleChange={this.handleChange}></Input>
                    </GridItem>
                    <GridItem item lg={6} md={6} sm={12}>
                        <Button onClick={this.getResult} disabled={!this.state.isReady} variant="contained" color="primary">Answer</Button>
                    </GridItem>

                <GridItem item lg={12} md={12} sm={12}>
                    {html}
                </GridItem>


            </GridContainer>
		)
    }
}

export default DashboardClass;
