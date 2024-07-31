import { getLocales } from 'expo-localization';
import { Text, View } from 'react-native';

import { Button } from '~/components/ui/button';
import useGameStore from '~/stores/game';

import i18n from "~/i18n";
import { useTranslation, initReactI18next } from "react-i18next";
import { useEffect } from 'react';

export default function Index() {
  const { isPlay, setIsPlay } = useGameStore();
  const { t } = useTranslation();

  // useEffect(() => {
  //   const deviceLocale = "vi";
  //   i18n.changeLanguage(deviceLocale);
  // }, []);


  return (
    <View className='m-auto flex-col justify-around'>
      <Text className='text-center text-red-500 font-bold'>Hehe, setup xong r ne!</Text>
      <Button variant='outline' onPress={() => setIsPlay(!isPlay)}>
        <Text>Simple Button using RNR</Text>
        <Text>{isPlay ? 'Playing' : 'Not Playing'}</Text>
      </Button>
      <Text>
        <Text>{t('Welcome to React')}</Text>
      </Text>
      <Text>Current locale: {i18n.language}</Text>
      <Text>Device locale: {getLocales()[0].languageCode}</Text>
    </View>
  );
}
