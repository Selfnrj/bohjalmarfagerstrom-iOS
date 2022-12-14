import { View, Text, ScrollView } from 'react-native'
import { useNavigation, useScrollToTop } from '@react-navigation/native';
import React, { useEffect, useState, useRef, useLayoutEffect } from 'react'
import ImageCard from '../components/ImageCard';
import sanityClient from '../sanity';

const HomeScreen = () => {
  const navigation = useNavigation();
  const ref = useRef(null);
  const [imageList, setImageList] = useState([]);

  useScrollToTop(ref);

  useLayoutEffect(() => {
    navigation.setOptions ({
      headerTitle: "Bo Hjalmar Fagerström",
    });
  },[]);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "post"] | order(_createdAt asc) {
        ...,
        categories[0]-> {
          ...,
        }
      }
    `).then((data) => {
      setImageList(data);
    });
  },[]);

  return (
    <ScrollView ref={ref}>
      {imageList?.filter(item => item.categories?.title === "Återblick").map(item => (
        <ImageCard key={item._id} imgUrl={item.mainImage} title={item.title} year={item.year} /> 
      ))}
    </ScrollView>
  )
}

export default HomeScreen