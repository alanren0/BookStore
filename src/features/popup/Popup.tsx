import { useSelector, useDispatch } from "react-redux"
import { disablePopup } from "./popupSlice"
import { stateType } from "../../types/stateType"
import CreateBookForm from "../books/CreateBookForm"
import EditBookForm from "../books/EditBookForm"

function Popup() {

    const popup = useSelector((state: stateType) => state.popup)
    const dispatch = useDispatch()

    if (!popup.createEnabled && !popup.editEnabled) {
        return <></>
    }

    return (
        <div className='popup-background'>
            <div className='popup-container'>
                <button className='popup-x-btn' onClick={() => dispatch(disablePopup())}>X</button>
                {popup.createEnabled &&
                    <CreateBookForm/>
                }
                {popup.editEnabled &&
                    <EditBookForm book={popup.selectedBook}/>
                }
            </div>
        </div>
    )
}

export default Popup