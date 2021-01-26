DROP TABLE IF EXISTS movies_favorites;

CREATE TABLE movies_favorites (
  userId int NOT NULL,
  movieId int NOT NULL,
  createdAt date DEFAULT NULL,
  updatedAt date DEFAULT NULL,
  PRIMARY KEY (userId, movieId),
  KEY B_movie_id (movieId),
  CONSTRAINT usermovies_ibfk_1 FOREIGN KEY (userId) REFERENCES users (id),
  CONSTRAINT usermovies_ibfk_2 FOREIGN KEY (movieId) REFERENCES dweb_movies.filme (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
