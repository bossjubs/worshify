import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { Modal, Portal, Button, PaperProvider } from 'react-native-paper';
import React from 'react'
import Header from '../components/Header'
import DashboardBtn from '../components/DashboardBtn';
import CardJob from '../components/CardJob';
import AdCard from '../components/AdCard';

const { height: screenHeight } = Dimensions.get("screen");
const { width: screenWidth } = Dimensions.get('screen');
const DashScreen = () => {


    return (
        <View style={styles.root}>
            <Header />

            <View style={styles.btn}>
                <DashboardBtn />
            </View>

            <View style={styles.textContainer}>
                <Text style={styles.textStyle} >Job Available</Text>
            </View>

            <View style={styles.cardjob}>
                <CardJob />
            </View>

            <View style={styles.adStyle}>
                <AdCard />
            </View>
        </View>
    )
}



export default DashScreen

const styles = StyleSheet.create({
    adStyle: {
        bottom: screenHeight / 1.6,
        alignItems: 'center'
    },
    root: {
        backgroundColor: '#151414',
        height: screenHeight,
    },
    btn: {
        bottom: screenHeight / 5
    },
    cardjob: {
        bottom: screenHeight / 2.4,
        alignItems: 'center',
    },
    textStyle: {
        fontWeight: 'bold',
        color: 'white'
    },
    textContainer: {
        bottom: screenHeight / 2.4,
        alignItems: 'flex-start',
        width: '95%',
        margin: '3%'
    }


})