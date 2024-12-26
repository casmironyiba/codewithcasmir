import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
// import { NextRequest, NextResponse } from 'next/server';
// import dbConnect from '@/libs/dbConfig';
import crypto from 'crypto'
import path from 'path'
import mongoose from 'mongoose'
import multer from 'multer'
import GridFsStorage from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import methodOverride from 'method-override'
// import bodyParser from 'body-parser'
import upload from './libs/gridfsStorage.js';
// import { NextApiRequest } from 'next';


const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.use(methodOverride('_method'));
const port = process.env.SERVER_PORT || 4000;

// app.use(express.json());

const conn = mongoose.createConnection(process.env.MONGO_URI)
// init stream
let gfs;

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('courses')
});


// Basic route
app
  .route('/api/ext/courses')
  .get((req, res) => {
    console.log('welcome')
    res.json('welcome')
  })
  .post(upload.single('file'), (req, res) => {
    console.log(req.files)
    res.json({ file: req.file });
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

