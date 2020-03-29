# Coronavirus -> COVID-19

READ me

Lisez moi

-----
This project consists of 2 parts

### Backend

To start the server, do: 

```sh
cd server
node index.js
```

To try a query, go to http://127.0.0.1:4000/graphql and execute the following:

```gql
{
  source
  lastUpdated
	timeSerie {
      date
      deaths {
        total
        europe
        france
        italy
        china
      }
    confirmed {
      total
      europe
      france
      italy
      china
    }
  }
}
```

### Frontend

```
yarn start
```

