# TrackeerAPI


Steps:

    Change config file in config folder for mysql connection.
    Npm install         <-- download the modules needed.
    npx sequelize-cli db:create         <-- Create db with the name on config file
    npx sequelize-cli db:migrate        <-- Migrations into db 
    //In index.js put {force:true} inside like  models.sequelize.sync({force:true}) and save the file
    //this one should create the connetions between tables, check db or console to be sure.
    //if the connection with tables is there remove {force:true} from sync because it drops db and creates
    //after every change in api.

    npx sequelize-cli db:seed:all  <--this one seeds the db with all the seeds data. 

    // https://sequelize.org/master/manual/migrations.html  <-- more info about migrations and seeds
