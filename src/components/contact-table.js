import React, {useState, useContext} from 'react';
import {View, Text, Button, TouchableOpacity, ActivityIndicator} from 'react-native';
import {ContactContext} from '../context/contact-context';

export default function ContactTable() {
  // Subscribe to `contacts` state and access dispatch function
  const [state, dispatch] = useContext(ContactContext);
  // Declare a local state to be used internally by this component
  const [selectedId, setSelectedId] = useState();

  const delContact = id => {
    dispatch({
      type: 'DEL_CONTACT',
      payload: id,
    });
  };

  const onRemoveUser = () => {
    delContact(selectedId);
    setSelectedId(null); // Clear selection
  };

  const rows = state.contacts.map(contact => (
    <TouchableOpacity
      style={{padding: 16, backgroundColor: contact.id === selectedId ? '#d3d3d3' : 'white' }}
      key={contact.id}
      onPress={() => setSelectedId(contact.id)}
      active={contact.id === selectedId}>
      <Text>{contact.id}</Text>
      <Text>{contact.name}</Text>
      <Text>{contact.email}</Text>
    </TouchableOpacity>
  ));

  return (
    <View>
      {state.loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <View>{rows}</View>
      )}
      <Button
        title="Remove User"
        disabled={!selectedId}
        onPress={onRemoveUser}
      />
    </View>
  );
}
