import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "first name is required"],
        trim: true,
        text: true
    },
    last_name: {
        type: String,
        required: [true, "last name is required"],
        trim: true,
        text: true
    },
    userName: {
        type: String,
        required: [true, "username is required"],
        trim: true,
        text: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        text: true
    },
    picture: {
        type: String,
        default: "https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png",
    },
    cover: {
        type: String
    },
    gender: {
        type: String,
        required: [true, "gender is required"],
        trim: true,
        text: true,
        enum: ["male", "female"]
    },
    bYear: {
        type: Number,
        required: true,
        trim: true,
    },
    bMonth: {
        type: Number,
        required: true,
        trim: true,
    },
    bDay: {
        type: Number,
        required: true,
        trim: true,
    },
    verified: {
        type: Boolean,
        default: false,
    },
    friends: {
        type: Array,
        default: []
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    requests: {
        type: Array,
        default: []
    },
    search: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
            },
        },
    ],
    details: {
        bio: {
            type: String,
        },
        otherName: {
            type: String,
        },
        job: {
            type: String,
        },
        workplace: {
            type: String,
        },
        highschool: {
            type: String,
        },
        college: {
            type: String,
        },
        currentcity: {
            type: String,
        },
        hometown: {
            type: String,
        },
        relationship: {
            type: String,
            enum: ['Single', 'In a relationship', 'Married', "Divorced", "It's complicated"]
        },
        instagram: {
            type: String,
        },
    },
    savedPosts: [
        {
            post: {
                type: mongoose.Schema.ObjectId,
                ref: "Post",
            },
            savedAt: {
                type: Date,
                default: new Date(),
            },
        },
    ],
},
    {
        timestamps: true,
    },
);
export default mongoose.model('User', userSchema)

