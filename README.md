# Company Cultural Survey App

Just a Prototype for HCLTECH's new application for survey.

## How to run the application locally

### Prerequisites

> Should have Docker installed for hosting DB **OR** Postgres DB hosted locally or on-cloud

1.Clone the repo

   ```sh
    git clone https://github.com/vignesh-gupta/hcl-cultural-app.git
   ```

2.If you are using docker container for DB, run the following command:
  
  ```sh
  npm run db
  ```

3.Create a `.env` file and copy content from `.env.example` (Change the DB url if you are not using Docker).

4.Run the application

  ```sh
    npm run dev
  ```

5.Wohoo 🎉! the app is up and running checkout <http://localhost:3000/>
