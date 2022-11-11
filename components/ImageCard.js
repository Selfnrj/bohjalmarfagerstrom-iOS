import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity'
import AutoHeightImage from 'react-native-auto-height-image';


const ImageCard = ({title, imgUrl, year}) => {
  return (
    <TouchableOpacity>
      <AutoHeightImage
          width={390}
          source={{
            uri: urlFor(imgUrl).url(),
          }}
        />
      <View className="p-4 mb-4">
        <Text className="mb-2 font-bold">{title}</Text>
        <Text className="">{year}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ImageCard