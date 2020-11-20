import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, View, Dimensions } from 'react-native';

import MapView from 'react-native-maps';
import Polyline from '@mapbox/polyline';

export default class MapScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coords: []
        }
    }

    componentDidMount() {
        this.getDirections()
    }

    async getDirections() {
        let _url = 'http://192.168.1.105:8080/DOSCG/map'
        let response = await axios({
            url: _url,
        }).catch(error => {
            console.log(error)
        });

        let points = Polyline.decode(response.data.routes[0].overview_polyline.points);
        let coords = points.map((point, index) => {
            return {
                latitude: point[0],
                longitude: point[1]
            }
        })
        this.setState({ coords: coords })
        return coords
    }

    render() {
        return (
            <View>
                <MapView style={styles.map} initialRegion={{
                    latitude: 13.7715412,
                    longitude: 100.5394461,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0921
                }}>
                    <MapView.Polyline
                        coordinates={this.state.coords}
                        strokeWidth={3}
                        strokeColor="blue"
                        optimizeWaypoints={true} />

                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
});
