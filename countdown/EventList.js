import React from 'react';
import { FlatList, Text }  from 'react-native';
import events from './db'
import EventCard from './EventCard';

class EventList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            events:[]
        }

    }
    
    componentDidMount() {
        this.setState({events: events.events});
    }

    render() { 
        console.log(this.state.events, '....====>>');
        return ( 
            <FlatList
            data ={this.state.events}
            renderItem ={({item}) => <EventCard event={item}> {item.title} </EventCard>}
            keyExtractor={item => item.id}
            />
         ); 
    } 
}
 
export default EventList;