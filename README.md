# RocketMovies-BackEnd
This is a movie database application built with Node.js and SQL. It allows users to register movies, provide information such as name, description, and rating, and associate tags with each movie.

## Features

- User registration and authentication
- Password encryption
- Email validation
- Movie CRUD operations
- Cascading deletion to ensure tags are deleted when a movie is deleted
- JWT-based authentication for user authentication

# Movie Database Application

This is a movie database application built with Node.js and SQL. It allows users to register movies, provide information such as name, description, and rating, and associate tags with each movie.

## Features

- User registration and authentication
- Password encryption
- Email validation
- Movie CRUD operations
- Cascading deletion to ensure tags are deleted when a movie is deleted
- JWT-based authentication for user authentication


## Usage
- Register a new user account.
- Log in with your credentials.
- Add movies by providing the name, description, and rating.
- Optionally, add tags to each movie to categorize them.
- Edit or delete movies as needed.
- Log out when finished.

 ## Security
- User passwords are encrypted using bcrypt library.
- Email addresses are validated using regex patterns.
- Cascading deletion is implemented in the database schema to ensure tags are deleted when a movie is deleted.
- User authentication is implemented using JWT (JSON Web Tokens).
## Contributing
Contributions are welcome! If you have any suggestions or improvements, please submit a pull request or open an issue.

