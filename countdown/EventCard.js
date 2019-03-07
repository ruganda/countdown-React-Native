import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import { formatDate, getCountdownParts } from './api';
import { propTypes } from './node_modules/react-native/Libraries/Experimental/SwipeableRow/SwipeableListView';

const EventCard = ({ event }) => {
    return ( 
        <View style={StyleSheet.card} >
          <View style={StyleSheet.cardHeader}>
            <Text style={StyleSheet.date}>{formatDate(event.date)}</Text>
            <Text style={StyleSheet.title}>{event.title}</Text>
          </View>
        </View>
     );
}

EventCard.PropTypes ={
    event: propTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.instanceOf(Date),
    })
}
export default EventCard;

