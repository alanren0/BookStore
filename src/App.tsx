import './App.css'
import BookList from './features/books/BookList'
import Popup from './features/popup/Popup'
import { useDispatch } from 'react-redux'
import { disablePopup, enableCreatePopup } from './features/popup/popupSlice'
import Header from './components/Header'

function App() {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(disablePopup())
        dispatch(enableCreatePopup())
    }

    return (
        <div>
            <div className='sticky-container'>
                <Popup/>
            </div>
            <Header/>
            <div className='main-container'>
                <div className='main'>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <button className='create-btn' onClick={handleClick}>Add Book</button>
                    </div>
                    <BookList/>
                </div>
            </div>
        </div>
    )
}

export default App
