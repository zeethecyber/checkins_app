import moment from 'moment';
import {Box, HStack, Stack, Text, Image} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ICheckinCard {
  title: string;
  date: string;
  comment: string;
  imageUrl?: string;
}

function CheckinCard({title, date, comment, imageUrl}: ICheckinCard) {
  // Formatting date with moment
  date = moment(date).format('Do [of] MMMM YYYY');

  // Render
  return (
    <Box backgroundColor={'white'} padding={4} borderRadius={'md'}>
      {imageUrl && (
        <Box height={220} borderRadius={'lg'} overflow={'hidden'}>
          <Image
            source={{
              uri: imageUrl,
            }}
            resizeMode="cover"
            alt="image"
            height={'100%'}
            width={'100%'}
          />
        </Box>
      )}
      <Stack space={4} marginTop={2}>
        <HStack space={2}>
          <Box
            borderRadius={'md'}
            backgroundColor={'gray.200'}
            height={'43px'}
            width={'43px'}
            justifyContent={'center'}
            alignItems={'center'}>
            <MaterialIcons name="groups" size={28} color="white" />
          </Box>
          <Stack>
            <Text>{title}</Text>
            <Text color={'primary'}>{date}</Text>
          </Stack>
        </HStack>
        <Text>{comment}</Text>
      </Stack>
    </Box>
  );
}

export default CheckinCard;
