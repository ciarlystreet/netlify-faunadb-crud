# netlify-faunadb-crud

## Set up FaunaDB

We are using FaunaDB to hold and store all of our todo data.

To setup a FaunaDB account and get the API key we'll use to scaffold out our todos database, head over to [https://dashboard.fauna.com/accounts/register](https://dashboard.fauna.com/accounts/register) and create a free Fauna Cloud account.

1. **Sign up**

   ![Sign up for Fauna](https://user-images.githubusercontent.com/11061584/81500036-bde4de80-92cf-11ea-8c77-226ef12b5bf5.png)

2. **Create a key**

   ![Create a fauna key](https://user-images.githubusercontent.com/11061584/81500040-c1786580-92cf-11ea-8cb4-0f176c00d1b3.png)

3. **Name your key and create**

   ![Name the fauna key and create](https://user-images.githubusercontent.com/11061584/81500041-c1786580-92cf-11ea-9e7a-647d3d3391d2.png)

4. **Copy API key**

   ![Copy API key](https://user-images.githubusercontent.com/11061584/81500042-c1786580-92cf-11ea-9053-3379deae0daf.png)
   ![Add API key to Netlify](https://user-images.githubusercontent.com/11061584/81500227-0e107080-92d1-11ea-8607-cfbedb6afa52.png)

5. **Create your FaunaDB database**

```bash
    yarn bootstrap
```

## Project setup

```bash

yarn install

```

### Compiles and hot-reloads for development

```bash

yarn serve

```

### Compiles and minifies for production

```bash

yarn build

```

### Lints and fixes files

```bash

yarn lint

```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### Inspirations

See [netlify faunadb example](https://github.com/netlify/netlify-faunadb-example).
