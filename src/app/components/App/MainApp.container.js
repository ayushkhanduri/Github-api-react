import React from 'react';


import SearchUI from '../../presentational/App/SearchUI.component';
import FilterUI from '../../presentational/App/FilterUI.component';
import ResultUI from '../../presentational/App/ResultUI.component';

export default class MainAppContainer extends React.Component {
    constructor() {
        super();
        this.state = { 
            allData: [],
            searchValue: "",
            filter: ""
        }
    }
    render(){
        return(<div className="container" id="container" >
                    <SearchUI submitForm={this.submitForm.bind(this)} valueChanged={this.searchChanged.bind(this)}
                    searchValue ={this.state.searchValue} clearData= {this.clearState.bind(this)}
                    />
                    <FilterUI filterValue={this.state.filter} clearFilter={this.clearFilter.bind(this)}
                    applyFilter = {this.applyFilter.bind(this)}
                    />
                    <ResultUI data={this.state.allData} filter={this.state.filter}/>
                </div> 
         
         );
    }

    applyFilter(value){
        this.setState({
            filter: value
        })
    }

    clearFilter(){
        this.setState({
            filter: ""
        })
    }
    
    searchChanged(value){
        this.setState({
            searchValue: value
        });
    }

    clearState(){
        this.setState({
            searchValue: ""
        });
    }
    submitForm(e){
        e.preventDefault();
        if(!this.state.searchValue.trim()){
            alert("Please enter a value ! ");
            return; 
        }
        let URL = `http://api.github.com/users/${this.state.searchValue}/repos`;
        fetch(URL).then(jsonData => jsonData.json()).then(jsonArr => {
            console.log(jsonArr);
            this.setState({
                allData: jsonArr
            });
        });
    }
}

