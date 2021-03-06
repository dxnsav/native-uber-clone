import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, NavigatorIOS } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestiantion } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from './NavFavourites';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Заказать поездку</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            placeholder="Куда?"
            styles={toInputBoxStyles}
            fetchDetails={true}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestiantion({
                  location: details.geometry.location,
                  description: data.description,
                })
              );

              navigation.navigate('RideOptionsCard');
            }}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: 'ru',
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>

        <NavFavourites />
      </View>
      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-gray-100`}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row bg-black justify-between w-32 px-4 py-3 rounded-full`}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Поездки</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ScooterScreen')}
          style={tw`flex flex-row justify-between w-32 px-4 py-3 rounded-full`}
        >
          <Icon name="electric-scooter" type="materialicon" color="black" size={16} />
          <Text style={tw`text-center`}>Самокаты</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#dddddf',
    borderRadius: 0, 
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
