import React from 'react';
import {View, Text, Image} from 'react-native';
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Boat = ({name, description, icon_name, icon_colour, poster}) => {
    return (
        <View>
            <Text></Text>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
                <FontAwesome6 name={icon_name} size={25} color={icon_colour} />
                {' '}{name}
            </Text>
            <Text>
                {description}
            </Text>
            <Image source={poster}
                   style={{width: 400, height:200}}/>
        </View>
    );
};

export default Boat;