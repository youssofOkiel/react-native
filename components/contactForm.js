import { Button, ScrollView, View } from "react-native-web";
import Form from 'react-bootstrap/Form';
import { StyleSheet } from "react-native";

export default function Contact({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "start", justifyContent: "start" }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>

      <View style={styles.cardContainer} >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Message</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Urgent" />
          </Form.Group>
          <Button variant="primary" title="Send"/>
            
        </Form>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({

    cardContainer: {
      margin: 20,
    },
  });
  