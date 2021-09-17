import React from 'react';
import {View} from 'react-native';
import ContactForm from '../components/contact-form';
import ContactTable from '../components/contact-table';
import {ContactContextProvider} from '../context/contact-context';

export default function Contacts() {
  return (
    <ContactContextProvider>
      <View>
        <ContactForm />
        <ContactTable />
      </View>
    </ContactContextProvider>
  );
}