import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/libs/dbConfig';
import crypto from 'crypto'
import path from 'path'
import mongoose from 'mongoose'
import multer from 'multer'
import GridFsStorage from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import methodOverride from 'method-override'
import bodyParser from 'body-parser'
import upload from '@/libs/gridfsStorage';
import { NextApiRequest } from 'next';

const conn = mongoose.createConnection(process.env.MONGO_URI!)
let gfs;

conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('courses')
});

export async function POST(req, res) {
  upload.single('file ');
  res.json({ file: req.file })


};


