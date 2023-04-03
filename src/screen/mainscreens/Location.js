import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { locationPermission, getCurrentLocation } from "../../helper/helperFunction";
import { ref, set } from "firebase/database";
import { db } from "../../firebase/FireBaseConfig";
import firebase from "../../firebase/FireBaseConfig";

export default function Location() {

    //get Currently Logged-In User Id
    var user = firebase.auth().currentUser;
    var userId = user.uid;
    const date = new Date().toISOString();


    const [state, setState] = useState({
        currentLocCoords: {
            latitude: 25.3960,
            longitude: 68.3578,
        }
    })

    const { currentLocCoords } = state;

    useEffect(() => {
        getLiveLocation();
    }, []);

    const getLiveLocation = async () => {
        const locPermissionDenied = await locationPermission();
        if (locPermissionDenied) {
            const { latitude, longitude } = await getCurrentLocation();
            setState({
                ...state,
                currentLocCoords: { latitude, longitude }
            });
            set(ref(db, 'users/' + userId), {
                latitude: latitude,
                longitude: longitude,
                date: date,
              });
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getLiveLocation()
        }, 4000);
        return () => clearInterval(interval)
    });



    return (
        <View style={styles.container}>
            <MapView
                style={StyleSheet.absoluteFill}
                initialRegion={{
                    ...currentLocCoords,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={currentLocCoords}
                />
            </MapView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})