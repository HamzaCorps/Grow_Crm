import { Schema, model } from 'mongoose'

const leadSchema = Schema({

    clientId: { type: Schema.Types.ObjectId, ref: 'User' },
    allocatedTo: { type: Schema.Types.ObjectId, ref: 'User' },
    city: { type: String },
    project: { type: String },
    region: { type: String },
    propertyType: { type: String, },
    homeType: { type: String },         // define enum
    minBudget: { type: Number, min: 0 },
    maxBudget: { type: Number, min: 0 },
    minAreaUnit: { type: String, },      // define enum
    minArea: { type: Number, min: 0 },
    maxAreaUnit: { type: String },
    maxArea: { type: Number, min: 0 },
    priority: { type: String, enum: ['high', 'moderate', 'low'] },
    clientType: { type: String },       // define enum
    beds: { type: String },
    progress: { type: String, default: 'Processing', enum: ['Processing', 'Almost Done', 'Done'] },
    status: { type: String, default: 'remaining', enum: ['successful', 'unsuccessful', 'underProcess', 'remaining', 'declined'] },
    source: { type: Array },
    targetDate: { type: Date },
    isAppliedForRefund: { type: Boolean, default: false },
    isArchived: { type: Boolean, default: false },

    type: { type: String, required: false, default: 'onsite', enum: ['onsite', 'online'] },
    projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: false }

}, { timestamps: true })

const leadModel = model('Lead', leadSchema)
export default leadModel