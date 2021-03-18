module.exports = {
    age: function age(timestamp) {
        const today = new Date()
        const birthDate = new Date(timestamp)

        let age = today.getFullYear() - birthDate.getFullYear()
        const month = today.getMonth() - birthDate.getMonth()

        if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
            age = age - 1
        }
        
        return age
    },
    date: function(timestamp) {
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return {
            day,
            month,
            year,
            iso: `${year}-${month}-${day}`,
            birthDay: `${day}-${month}`
        }
    },
    graduation: function(level) {
        let graduation
        switch (level) {
            case "high-school":
                graduation = "Ensino Médio Completo"
                return graduation
            case "university":
                graduation = "Ensino Superior"
                return graduation
                case "pos-graduate":
                graduation = "Mestrado e Doutorado"
                return graduation
        }
    },
    grade: function(level) {
        let grade
        switch (level) {
            case "F5":
                grade = "5º Ano Ensino Fudamental"
                return grade
            case "F6":
                grade = "6º Ano Ensino Fudamental"
                return grade
            case "F7":
                grade = "7º Ano Ensino Fudamental"
                return grade
            case "F8":
                grade = "8º Ano Ensino Fudamental"
                return grade
            case "F9":
                grade = "9º Ano Ensino Fudamental"
                return grade
            case "M1":
                grade = "1º Ano Ensino Médio"
                return grade
            case "M2":
                grade = "2º Ano Ensino Médio"
                return grade
            case "M3":
                grade = "3º Ano Ensino Médio"
                return grade
        }
    }
}