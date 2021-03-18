const Student = require('../models/Student')
const { age, date, grade } = require('../../lib/utils')
const Intl = require('intl')

module.exports = {
    index(req, res) {
        let { filter, page, limit } = req.query

        page = page || 1
        limit = limit || 2
        let offset = limit * (page - 1)

        const params = {
            filter,
            page,
            limit,
            offset,
            callback(students) {

                const pagination = {
                    total: students[0] == undefined ? Math.ceil(students[0] / limit) : Math.ceil(students[0].total / limit),
                    page
                }

                for (student of students) {
                    student.school_year = grade(student.school_year)
                }

                return res.render("students/index", { students, pagination,filter })
            }
        }

        Student.paginate(params)

        
    },
    create(req, res){
        Student.studentSelectOptions(function(options) {

            return res.render("students/create", { studentOptions:options })
        })
    },
    post(req, res) {
        const keys = Object.keys(req.body)
    
        for(key of keys) {
    
            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }
        }
        Student.create(req.body, function(students) {
            res.redirect(`/students/${students.id}`)
        })
    
        
    },
    show(req, res) {
        Student.find(req.params.id, function(student) {
            if(!student) return res.send("Student not found!")

            student.age = age(student.birth_date)
            student.school_year = grade(student.school_year)

            return res.render('students/show', { student })
        })
    },
    edit(req, res) {
        Student.find(req.params.id, function(student) {
            if(!student) return res.send("Student not found!")

            student.birth_date = date(student.birth_date).iso
            
            Student.studentSelectOptions(function(options) {

                return res.render("students/edit", { student, studentOptions:options })
            })
        })
    },
    put(req, res) {

        const keys = Object.keys(req.body)

        for(key of keys) {

            if (req.body[key] == "") {
                return res.send('Please, fill all fields!')
            }
        }

        Student.update(req.body, function() {
            return res.redirect(`/students/${req.body.id}`)
        })
    
    },
    delete(req, res) {
        Student.delete(req.body.id, function() {
            return res.redirect(`/students`)
        })
    }
}
