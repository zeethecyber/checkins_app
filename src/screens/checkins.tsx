import {useState, useEffect} from 'react';
import {Box, ScrollView, Stack} from 'native-base';
import CheckinCard from '../components/checkin_card';
import database from '@react-native-firebase/database';

function CheckinScreen() {
  const [checkins, setCheckins] = useState<any>([]);

  useEffect(() => {
    const onChildAdd = database()
      .ref('/checkins')
      .on('value', snapshot => {
        if (snapshot.val()) {
          setCheckins(Object.values(snapshot.val()));
        }
      });

    // Stop listening for updates when no longer required
    return () => database().ref('/checkins').off('value', onChildAdd);
  }, []);

  return (
    <ScrollView style={{padding: 17}}>
      <Stack space={3}>
        {checkins?.map((item: any) => {
          return (
            <CheckinCard
              key={item?.name}
              title={item?.name}
              comment={item?.comment}
              date={item?.created_at}
              imageUrl={item?.imageURL}
            />
          );
        })}
      </Stack>
      <Box height={12} />
    </ScrollView>
  );
}

export default CheckinScreen;
