import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { FlatList } from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';

const data = [
  {
    id: '001',
    icon: 'home',
    location: 'Дом',
    destination: 'ул. Молочная, 34, Харьков',
  },
  {
    id: '002',
    icon: 'heart',
    location: 'Квартира',
    destination: 'ул. Сумская, 33, Харьков',
  },
];

const NavFavourites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={[tw`bg-gray-200`, { height: 0.5}]} />}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{location}</Text>
            <Text style={tw`text-gray-500`}>{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavourites;

const styles = StyleSheet.create({});
