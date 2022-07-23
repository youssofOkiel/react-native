import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import axios from "axios";
import { Button, View } from "react-native-web";
import { Card } from "react-bootstrap";

export default function Movie({ route, navigation }) {
  const { movieId } = route.params;

  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0 "
      )
      .then(function (res) {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch(function (err) {});
  }, []);

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: "start", justifyContent: "start" }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>

      <View style={styles.cardContainer}>
        <Card>
          <Card.Img
            variant="top"
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          />
          <Card.Body>
            <Card.Title>{movie.title} </Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
          </Card.Body>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
