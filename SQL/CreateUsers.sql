DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  isadmin boolean DEFAULT false,
  first_name varchar(255) DEFAULT NULL,
  last_name varchar(255) DEFAULT NULL,
  email varchar(255) NOT NULL,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  resetPasswordToken varchar(255) DEFAULT NULL,
  resetPasswordExpires datetime DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;