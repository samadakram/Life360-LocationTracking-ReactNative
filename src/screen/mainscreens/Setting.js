import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import MapView, * as reactNativeMaps from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_KEY } from "../../helper/googleMapKey";

export default function Setting() {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [SelectedDate, setSelectedDate] = useState('Select Date');
    const [isShowMap, setShowMap] = useState(false);
    const [Coordinates, setCoordinates] = useState([
        {
            latitude: 25.3960,
            longitude: 68.3578,
        },
        {
            latitude: 25.3669,
            longitude: 68.3518,
        }
    ])

    //const { firstLocCoords, lastLocCoords } = state;

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const dt = new Date(date);
        const dateFormat = dt.toISOString().split('T');
        const splitDate = dateFormat[0].split('-');
        console.log(splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0]);
        setSelectedDate(splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0]);

        hideDatePicker();
        setShowMap(true);
    };

    return (
        <View style={styles.container}>
            {isShowMap &&
                <MapView
                    style={StyleSheet.absoluteFill}
                    initialRegion={{
                        latitude: Coordinates[0].latitude,
                        longitude: Coordinates[0].longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                >
                    <reactNativeMaps.Marker
                        coordinate={Coordinates[0]}
                    />
                    <reactNativeMaps.Marker
                        coordinate={Coordinates[1]}
                    />

                    <reactNativeMaps.Polyline
                        coordinates={Coordinates}
                        strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                        strokeColors={['#7F0000']}
                        strokeWidth={6}
                    />
                </MapView>
            }
            <TouchableOpacity
                style={styles.picker}
                onPress={() => {
                    showDatePicker();
                }}>
                <Text>{SelectedDate}</Text>
            </TouchableOpacity>

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pickerContainer: {
        //flex: 1,
        justifyContent: 'center',
    },
    picker: {
        width: '50%',
        height: 50,
        borderWidth: 1.5,
        marginTop: 10,
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9400D3',
        borderColor: '#9400D3',
        //color: 'black',
    },
    mapContainer: {
        flex: 1,
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})