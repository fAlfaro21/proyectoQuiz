const mongoose = require('mongoose')
const { Schema } = mongoose

const QuestionsSchema = new Schema([
    { title: String,
        choices: [
            {
                label: String,
                id: String,
                name: String,
                value: String,
            },
            {
                label: String,
                id: String,
                name: String,
                value: String,
            },
            {
                label: String,
                id: String,
                name: String,
                value: String,
            },
            {
                label: String,
                id: String,
                name: String,
                value: String,
            }
                ],
      answer: String
    }
])

const model = mongoose.model('Questions', QuestionsSchema)

module.exports = model