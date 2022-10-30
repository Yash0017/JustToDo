/*
 *   Copyright (c) 2022 Yash Yogesh Gaidhani
 *   All rights reserved.
 *   This work belongs to Yash Yogesh Gaidhani
 */
import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, ScrollView, StyleSheet} from 'react-native';
import { Header, Button, FAB } from 'react-native-elements';

const {width, height} = Dimensions.get('window');

const MainList = () => {

    return (
        <View>
            <Header 
                statusBarProps={{
                    barStyle: 'dark-content',
                    backgroundColor: '#ffffff',
                }}
                centerComponent={{title: 'My Tasks', style: styles.header}}
                containerStyle={{backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}
            />
            <ScrollView>
                <View style={styles.main_view} >
                    <Text>List will go here</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        color: '#24252a',
        textAlign: 'center',
        fontSize: height * 0.15,
    },
    main_view: {
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        width: width,
        height: height,
    }
});

export default MainList;