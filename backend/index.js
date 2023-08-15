require('dotenv').config();
const express = require('express');
const addQuery = require('./routes/add-query');
const createJob = require('./routes/create-job');
const downloadFinalFiles = require('./routes/download-final-files');
const listJobs = require('./routes/list-job');
const moveToJobs = require('./routes/move-to-job');
const updateJobStatus = require('./routes/update-job-status');
const updateUnread = require('./routes/update-unread');
const updateUnreadClient = require('./routes/update-unread-client');
const updateJobRevisedStatus = require('./routes/edit-job-revised-status');
const uploadFilesToQuery = require('./routes/upload-files-to-queries');
const uploadFinalFiles = require('./routes/upload-final-files');
const addTimmer = require('./routes/add-timmer');
const jobReport = require('./routes/job-report');
const fs = require('fs');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./spec/swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/spec/swagger.css"), 'utf8');
const cors = require('cors');
require('./config/db');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/v1/api/job', addQuery, addTimmer, createJob, downloadFinalFiles, listJobs, moveToJobs, updateJobStatus, updateJobRevisedStatus, uploadFilesToQuery, uploadFinalFiles,
jobReport, updateUnread, updateUnreadClient);
app.use(cors());
app.use('/v1/api/job/spec', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));

app.listen(`${process.env.APP_PORT}`, () => {
  console.log('job-service started on port '+ `${process.env.APP_PORT}`);
});
