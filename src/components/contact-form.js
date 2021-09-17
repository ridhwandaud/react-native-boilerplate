import React, {useState, useContext} from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';
import _ from 'lodash';
import {ContactContext} from '../context/contact-context';

export default function ContactForm() {
  const name = useFormInput('');
  const email = useFormInput('');
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(ContactContext);

  const onSubmit = () => {
    dispatch({type: 'START'});

    setTimeout(() => {
      dispatch({
        type: 'ADD_CONTACT',
        payload: {
          id: _.uniqueId(10),
          name: name.value,
          email: email.value,
        },
      });

      dispatch({type: 'COMPLETE'});
    }, 2000);

    // Reset Form
    name.onReset();
    email.onReset();
  };

  return (
    <View>
      <TextInput {...name} style={styles.input} placeholder="Name" />
      <TextInput
        {...email}
        style={styles.input}
        placeholder="demo@example.com"
      />
      <Button onPress={onSubmit} title="Submit" />
    </View>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = val => {
    setValue(val);
  };

  const handleReset = () => {
    setValue('');
  };

  return {
    value,
    onChangeText: handleChange,
    onReset: handleReset,
  };
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 8,
  },
});
