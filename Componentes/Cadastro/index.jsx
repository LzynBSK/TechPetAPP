import React, { useEffect, useState } from 'react';
import { View, Button, Text, SafeAreaView } from 'react-native';
import Parse from 'parse/react-native.js';


const Cadastro = () => {
  const [person, setPerson] = useState(new Parse.Object('Person'));

  async function addPerson() {
    try {
      //create a new Parse Object instance
      const newPerson = new Parse.Object('Person');
      //define the attributes you want for your Object
      newPerson.set('name', 'John');
      newPerson.set('email', 'john@back4app.com');
      //save it on Back4App Data Store
      await newPerson.save();
    } catch (error) {
      console.log('Error saving new person: ', error);
    }
  }

  async function fetchPerson() {
    //create your Parse Query using the Person Class you've created
    let query = new Parse.Query('Person');
    //run the query to retrieve all objects on Person class, optionally you can add your filters
    let queryResult = await query.find();
    //the resul is an arry of objects. Pick the first result 
    const currentPerson = queryResult[0];
    //access the Parse Object attributes
    console.log('person id: ', currentPerson.get('id'));
    console.log('person name: ', currentPerson.get('name'));
    console.log('person email: ', currentPerson.get('email'));
    setPerson(currentPerson);
  }

  useEffect(() => {
    fetchPerson()
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>Name: {person.get('name')}</Text>
        <Text>email: {person.get('email')}</Text>
        <Button title='Add person' onPress={addPerson} />
        <Button title='Fetch person' onPress={fetchPerson} />
        {/* Your other components here ....*/}
      </View>
    </SafeAreaView>
  )

}

export default Cadastro;