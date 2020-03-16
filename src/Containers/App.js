import React ,{Component} from 'react';
import CardList from '../Components/CardList'
import Scroll from '../Components/Scroll';
 import {robots} from '../Components/robots';
import Searchbox from '../Components/Searchbox';
import ErrorBoundary from '../Components/ErrorBoundary'

const state = {
    robots: robots,
    searchfield:''
}

class App extends Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield:''
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})})
            }

    executesearch = (event) => {
        this.setState({searchfield: event.target.value})
       // console.log(filteredRobot);
       
    }
    render(){
        const {robots, searchfield} = this.state;

        const filteredRobot = robots.filter(r=>{
            return r.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if (robots.length===0){
            return <h1>Loading...</h1>

        }
        return (
            <div className='tc'>
                <h1 className='f1'>
                    Robo Friends
                </h1>
                <Searchbox searchChange={this.executesearch}/>
                <Scroll>
                    <ErrorBoundary>
                 <CardList robots = { filteredRobot }/>);
                 </ErrorBoundary>
                </Scroll>
                
            </div>)
    
    }


}

export default App;