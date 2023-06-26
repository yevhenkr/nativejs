import {doseStudentLiveIn, madeStudentActive, StudentType} from '../02/02';
import {addSkill} from './03';

let student: StudentType

beforeEach(() => {
    student = {
        id: 1,
        age: 1,
        isActive: false,
        name: "Dimith",
        address: {
            streetTitle: "Sechenova",
            city: {
                title: "Minsk",
                countryTitle: "Ukraine"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            }, {
                id: 3,
                title: "React"
            }
        ]

    }
})
test("new skill should be added ", () => {
    expect(student.technologies.length).toBe(3)
    addSkill(student, "JS")
    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("JS")
    expect(student.technologies[3].id).toBeDefined()
})

test("student shut be active", () => {
    expect(student.isActive).toBe(false)
    madeStudentActive(student)
    expect(student.technologies.length).toBe(3)
})

test("Does student lives in Ukraine", () => {
    const result1 = doseStudentLiveIn(student, "Moscov")
    const result2 = doseStudentLiveIn(student, "Ukraine")

    expect(result1).toBe(false)
    expect(result2).toBe(true)
})