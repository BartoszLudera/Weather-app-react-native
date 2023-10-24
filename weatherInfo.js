import React, { useCallback, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { debounce } from 'lodash';
import { fetchLocations } from './api/weather';

export default function WeatherInfo() {
  // const [locations, setLocations] = useState([]);
  // const [showList, setShowList] = useState(false);
  // const [location, setLocation] = useState(null);

  // const handleSearch = (value) => {
  //   setShowList(true);
  //   fetchLocations({ cityName: value })
  //     .then((data) => {
  //       setLocations(data);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // const handleLocation = (loc) => {
  //   setShowList(false);
  //   console.log(loc);
  //   setLocation(loc);
  // };

  // const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image blurRadius={70} source={require('./assets/bg.png')} className="absolute h-full w-full" />
      <View className="flex flex-1 top-10 mx-3">
        <View className="">
          <View className="flex-row justify-end items-center rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
            {/* //<TouchableOpacity onPress={() => handleLocation()}> */}
              <TextInput
                placeholder='Search city'
                placeholderTextColor={'lightgray'}
                className=" w-full h-10 pl-6 flex-1 text-base pb-1"
                color={'lightgray'}
              />
            {/* </TouchableOpacity>
            {(showList)?(
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl ">
              {
                locations.map((loc, index) => {
                  let showBorder = index + 1 != locations.length;
                  let borderClass = showBorder ? ' border-b-2 border-b-gray-400' : '';
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleLocation(loc)}
                      className={"flex-row items-center border-0 p-3 px-4 mb-1 " + borderClass}>
                      <Text className="text-black text-lg ml-2">s, s</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View>):null
            } */}

            <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', marginLeft: -30 }} className="rounded-full p-3 m-1">
              <Feather name="search" size={22} color="white" />
            </View>
          </View>
          <View className="items-center flex-col gap-y-7 top-10 bottom-10">
            <View className="flex-row ">
              <Entypo name="location-pin" size={27} color="white" />
              <Text className="font-bold text-3xl text-white text-center"> Poland, <Text className="text-2xl font-semibold text-gray-300">Rzeszów</Text></Text>
            </View>
            <Image source={require('./assets/partlycloudy.png')} className="h-60 w-60" />
            <View>
              <Text className=" font-semibold text-6xl text-white">  23°</Text>
              <Text className=" font-normal text-xl text-gray-300"> Partly cloudy</Text>
            </View>
            <View className="flex-row justify-between gap-x-20">
              <View>
                <FontAwesome5 name="wind" size={24} color="white" />
                <Text className="text-xl font-normal text-gray-300 top-2">22km</Text>
              </View>
              <View>
                <Entypo name="water" size={30} color="white" />
                <Text className="text-xl font-normal text-gray-300 top-2">23%</Text>
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