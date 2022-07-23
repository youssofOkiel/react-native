import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View, Button } from "react-native";
import axios from "axios";
import Card from "react-bootstrap/Card";

export default function Movies({ navigation }) {
  const [movies, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=aa6fc65fcedb7431af3ac2fbe6484cd0&language=en-US&page=1"
      )
      .then(function (res) {
        setMovie(res.data.results);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <View style={{ flex: 1, alignItems: "start", justifyContent: "start" }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>

      <Text style={styles.title}>Movies</Text>

      {movies.map((movie) => {
        return (
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
              <Button
                title="Go to Details"
                variant="primary"
                onPress={() => {
                    navigation.navigate("Movie", { 
                        movieId: movie.id 
                    });
                
                }}
              />
            </Card>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bolder",
    marginStart: 150,
  },
  cardContainer: {
    margin: 20,
  },
});
