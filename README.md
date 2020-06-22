# POC
In project is means `Proof of concept`


In this I took help from this [link](https://hapipal.com/getting-started)

If you want run that project then you have to run that command Line by line

        npm install

It will install all packages which is in `package.json`

## Configuration 

For Run this you also have to make `.env` file instead of `sample.env` you will got `server/sample.env` 
In this you have to git your databse name and others details about database

`DB_NAME`,  
`DB_HOST`,  
`DB_USER`,  
`DB_PASS`,  
`PORT`


## migration 

There is a `migration-file` so you also have to install Knex with the help of `npm`

        npm i knex --save

so it will help you to run migration to make `migrate:latest` or `make:migration-file`
After that you can run 

        knex migrate:latest

make sure that you filled that all `Configuration` things.

## Server 

For run the Server you have to run 

        npm start
