import React, { useCallback, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { debounce } from 'lodash';
import Weather from './api/weather';

export default function App() {

  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState('');

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=512045eca1a84964968210123230309&q=${location}&aqi=no`);
      const data = await response.json();
      setResult(data.current);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image blurRadius={70} source={require('./assets/bg.png')} className="absolute h-full w-full" />
      <View className="flex flex-1 top-10 mx-3">
        <View className="">
          <View className="flex-row justify-end items-center rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            <TextInput
              placeholder='Search city'
              placeholderTextColor={'lightgray'}
              className=" w-full h-10 pl-6 flex-1 text-base pb-1"
              color={'lightgray'}
              value={location}
              onChangeText={(text) => setLocation(text)}
            />
            <TouchableOpacity onPress={fetchData}>
              <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', marginLeft: -30 }} className="rounded-full p-3 m-1">
                <Feather name="search" size={22} color="white" />
              </View>
            </TouchableOpacity>
          </View>
          <View className="items-center flex-col gap-y-7 top-10 bottom-10">
            <View className="flex-row ">
              <Entypo name="location-pin" size={27} color="white" />
              <Text className="font-bold text-3xl text-white text-center">  {result.location?.name}, <Text className="text-2xl font-semibold text-gray-300">  </Text> {result.location && result.location.name ? result.location.name : 'dupa'}</Text>
            </View>
            <Image source={require('./assets/partlycloudy.png')} className="h-60 w-60" />
            <View>
              <Text className=" font-semibold text-6xl text-white">  {result.temp_c}°</Text>
              <Text className=" font-normal text-xl text-gray-300"> {result.condition?.text}</Text>
            </View>
            <View className="flex-row justify-between gap-x-20">
              <View>
                <FontAwesome5 name="wind" size={24} color="white" />
                <Text className="text-xl font-normal text-gray-300 top-2">{result.wind_kph}km/h</Text>
              </View>
              <View>
                <Entypo name="water" size={30} color="white" />
                <Text className="text-xl font-normal text-gray-300 top-2">{result.humidity}%</Text>
              </View>
              <View>
                <Feather name="sunrise" size={30} color="white" />
                <Text className="text-xl font-normal text-gray-300 top-2">6:27</Text>
              </View>
            </View>
            <View>
              <View className="flex-row items-center left bottom-2 ">
                <Ionicons name="calendar-sharp" size={30} color="white" />
                <Text className="font-normal text-gray-300">   Weather for the next day </Text>
              </View>
              <View className="flex-row">
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                  <View className=" mr-2">
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} className=" rounded-2xl w-20 h-24 flex items-center justify-center">
                      <Text className="text-center text-white font-bold">Sunday</Text>
                      <Text className="text-center text-white font-bold">21°</Text>
                      <Image source={require('./assets/heavyrain.png')} className="h-12 w-12 just" />
                    </View>
                  </View>

                  <View className=" mr-2">
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} className=" rounded-2xl w-20 h-24 flex items-center justify-center">
                      <Text className="text-center text-white font-bold">Sunday</Text>
                      <Text className="text-center text-white font-bold">21°</Text>
                      <Image source={require('./assets/heavyrain.png')} className="h-12 w-12 just" />
                    </View>
                  </View>

                  <View className=" mr-2">
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} className=" rounded-2xl w-20 h-24 flex items-center justify-center">
                      <Text className="text-center text-white font-bold">Sunday</Text>
                      <Text className="text-center text-white font-bold">21°</Text>
                      <Image source={require('./assets/heavyrain.png')} className="h-12 w-12 just" />
                    </View>
                  </View>

                  <View className=" mr-2">
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} className=" rounded-2xl w-20 h-24 flex items-center justify-center">
                      <Text className="text-center text-white font-bold">Sunday</Text>
                      <Text className="text-center text-white font-bold">21°</Text>
                      <Image source={require('./assets/heavyrain.png')} className="h-12 w-12 just" />
                    </View>
                  </View>


                  <View className=" mr-2">
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} className=" rounded-2xl w-20 h-24 flex items-center justify-center">
                      <Text className="text-center text-white font-bold">Sunday</Text>
                      <Text className="text-center text-white font-bold">21°</Text>
                      <Image source={require('./assets/heavyrain.png')} className="h-12 w-12 just" />
                    </View>
                  </View>

                  <View className="">
                    <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} className=" rounded-2xl w-20 h-24 flex items-center justify-center">
                      <Text className="text-center text-white font-bold">Sunday</Text>
                      <Text className="text-center text-white font-bold">21°</Text>
                      <Image source={require('./assets/heavyrain.png')} className="h-12 w-12 just" />
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}