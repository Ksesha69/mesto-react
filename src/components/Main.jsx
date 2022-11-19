import { useContext } from "react";
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import Card from "./Card";
import profileButton from '../images/Vector.svg';
import imageButton from '../images/plus.svg';

<<<<<<< HEAD
function Main({ 
    onEditAvatar, 
    onEditProfile, 
    onAddPlace, 
    onHandleCardClick, 
    handleCardLike, 
    handleCardDelete, 
    cards 
}) {

    const currentUser = useContext(CurrentUserContext);

=======
function Main({ onEditAvatar, onEditProfile, onAddPlace, onHandleCardClick }) {
    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
        .then((userData) => {
            setUserAvatar(userData.avatar);
            setUserName(userData.name);
            setUserDescription(userData.about);
        })
        .catch(err => {
            console.log(err);
        });
        api.getInitialCard()
        .then((res) => {
            setCards(res);
        })
        .catch(err => {
            console.log(err);
        });
    })
>>>>>>> parent of de5ca3c (2-inter)
    
    return (
        <main>
            <section className="profile">
                <div className="profile__info">
                    <button 
                    className="profile__avatar-button"
                    onClick={onEditAvatar}
                    />
                    <img
                        className="profile__avatar"
                        alt={currentUser.name}
                        src={currentUser.avatar}
                    />
                    <div className="profile__text">
                        <div>
                            <h1 className="profile__name">{currentUser.name}</h1>
                            <p className="profile__job">{currentUser.about}</p>
                        </div>
                        <button
                        type="button" 
                        className="button profile__edit-button"
                        onClick={onEditProfile}
                        >
                            <img
                                src={profileButton}
                                alt="Изменить подпись"
                            />
                        </button>
                    </div>
                </div>
                <button 
                type="button" 
                className="profile__add-button"
                onClick={onAddPlace}
                >
                    <img
                        className="profile__image-button"
                        src={imageButton}
                        alt="Добавить фото"
                    />
                </button>
            </section>
            <section className="elements">
                {
                    cards?.map((card) => (
                        <Card
                        card={card}
                        key={card._id}
                        onCardClick={onHandleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                ))}
            </section>
        </main>
    )
}

export default Main;