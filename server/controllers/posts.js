import express from 'express';
import mongoose from 'mongoose';

import LogEntry from '../models/logEntry.js';

const router = express.Router();

export const getLogs = async (req, res) => { 
    try {
        const logEntrys = await LogEntry.find();
                
        res.status(200).json(logEntrys);
    } catch (error) {
        res.status(404).json({ entry: error.entry });
    }
}

export const getLog = async (req, res) => { 
    const { id } = req.params;

    try {
        const log = await LogEntry.findById(id);
        
        res.status(200).json(log);
    } catch (error) {
        res.status(404).json({ entry: error.entry });
    }
}

export const createLog = async (req, res) => {
    const { title, entry, selectedFile, contributor, labels } = req.body;

    const newLogEntry = new LogEntry({ title, entry, selectedFile, contributor, labels })

    try {
        await newLogEntry.save();

        res.status(201).json(newLogEntry );
    } catch (error) {
        res.status(409).json({ entry: error.entry });
    }
}

export const updateLog = async (req, res) => {
    const { id } = req.params;
    const { title, entry, contributor, selectedFile, labels } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No log with id: ${id}`);

    const updatedLog = { contributor, title, entry, labels, selectedFile, _id: id };

    await LogEntry.findByIdAndUpdate(id, updatedLog, { new: true });

    res.json(updatedLog);
}

export const deleteLog = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No log with id: ${id}`);

    await LogEntry.findByIdAndRemove(id);

    res.json({ entry: "Log deleted successfully." });
}

export const likeLog = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No log with id: ${id}`);
    
    const log = await LogEntry.findById(id);

    const updatedLog = await LogEntry.findByIdAndUpdate(id, { likeCount: log.likeCount + 1 }, { new: true });
    
    res.json(updatedLog);
}


export default router;