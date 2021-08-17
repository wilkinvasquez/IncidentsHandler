## Incidents handler
This is a web application to manage incidents through tickets.

## How to run the application

### 1. Run the API

- Go to */Incidentium/API/* and open **Incidentium.sln** in Visual Studio 2017 or later
- In **Incidentium.Application** open the file **appsettings.json** and set the **ConnectionString** whith your SQL Server user and password
- Open **Package Manager Console**
- Select **Incidentium.Data** as default project
- Run command **update-database**
- In SQL Server run the SQL script that is in the file */dummy-data.sql*
- Run the application

### 2. Run the Web

- Open in console */Incidentium/Web/*
- Run command **npm install**
- Run command **npm start**
