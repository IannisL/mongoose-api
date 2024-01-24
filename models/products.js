import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_ROUNDS = 8;

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLenght: 10,
    },
    password: {
        type: String,
        required: true,
        unique: true,
    },
    brand: {
        type: String,
        minLength: 2,
        maxLength: 30,
        required: true,
    },
    quanity: {
        type: Number,
        min: 1,
        max: 20000,
    },
    user: {
        type: Boolean,
        defult: false
    },
    location: {
        type: String,
        enum: ["Sephora", "Ulta", "DP", "Macys"]
    },
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, retDoc) {
            delete retDoc.password; // removes password from the json doc
            return retDoc;

        }

    }
});
productSchemaSchema.index({ name: 1 });
productSchema.index({ quanity: 1 });



productSchemaSchema.pre('save', async function (next) {
    // if the password has not changed continue
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    return next();
});


export default mongoose.model('Product', ProductSchema);