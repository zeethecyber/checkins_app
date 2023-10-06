import {useState} from 'react';
import {Input, Stack, View, Button, useToast, Box, Text} from 'native-base';
import {StyleSheet} from 'react-native';
import firebase from '@react-native-firebase/app';
import '@react-native-firebase/database';

function AddCheckinScreen() {
  const [nameInput, setNameInput] = useState('');
  const [commentInput, setCommentInput] = useState('');
  const [imageInput, setImageInput] = useState('');

  const [loading, setLoading] = useState(false);

  const toast = useToast();

  // Function to insert data to Firebase Database
  const submitData = async () => {
    setLoading(true);
    try {
      const database = firebase.database();
      const user = database.ref('/checkins');
      await user.push({
        name: nameInput,
        comment: commentInput,
        imageURL: imageInput,
        created_at: Date.now(),
      });
      setNameInput('');
      setCommentInput('');
      setImageInput('');
      toast.show({
        render: () => {
          return (
            <Box bg="green.500" px="2" py="1" rounded="sm" mb={5}>
              <Text color={'white'}>Checkin added successfully!</Text>
            </Box>
          );
        },
      });
    } catch (error) {
      console.error(error);
      toast.show({
        render: () => {
          return (
            <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
              <Text color={'white'}>Error: {String(error)}</Text>
            </Box>
          );
        },
      });
    }
    setLoading(false);
  };

  return (
    <View style={{padding: 17}}>
      <Stack space={3}>
        <Input
          onChangeText={text => setNameInput(text)}
          variant="outline"
          placeholder="Name"
          style={styles.input}
          value={nameInput}
        />
        <Input
          onChangeText={text => setCommentInput(text)}
          variant="outline"
          placeholder="Comment"
          style={styles.input}
          value={commentInput}
        />
        <Input
          onChangeText={text => setImageInput(text)}
          variant="outline"
          placeholder="ImageURL"
          style={styles.input}
          value={imageInput}
        />
        <Button
          onPress={submitData}
          backgroundColor={'primary'}
          isLoading={loading}>
          ADD
        </Button>
      </Stack>
    </View>
  );
}

export default AddCheckinScreen;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
  },
});
