import { bookType } from "./bookType"
import { formType } from "./formType"
import { popupType } from './popupType'

export type stateType = {
    bookList: {
        books: bookType[]
    },
    createForm: formType,
    editForm: formType,
    popup: popupType

}