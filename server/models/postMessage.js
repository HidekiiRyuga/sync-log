import mongoose from 'mongoose';

const logSchema = mongoose.Schema({
    title: String,
    entry: String,
    priority: {
        type: String,
        default: 'Normal',
        enum: ['Low', 'Normal', 'High'] // Only allows these 3 values
    },
    contributor: String,
    labels: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var LogEntry = mongoose.model('LogEntry', logSchema);

export default LogEntry;