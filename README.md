# Grid maker

### Setup server environment

1. Clone this repo by running.

```sh
https://github.com/nipunravisara/grid-maker.git
```

2. Then make a mongodb atles database in mongodb. [learn more](https://docs.atlas.mongodb.com/getting-started/)
3. create a `.env` file in project root of server folder and add your database connecting string and prot to `.env` file as below

```sh
DATABASE_URL="YOUR_CONNECTING_STRING_HERE"
PORT=4000
```

4. Install dependencies by running

```sh
yarn install
```

5. To start the server run

```sh
yarn dev
```

### Setup client environment

1. Navigate to `client` folder.
2. Install dependencies by running

```sh
yarn install
```

5. To start the application run

```sh
yarn start
```
