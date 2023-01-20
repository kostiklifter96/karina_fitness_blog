import { AboutMe } from "./components/aboutMe/AboutMe";
import { Aside } from "./components/aside/Aside";
import { Menu } from "./components/menu/Menu";
import { Promo } from "./components/promo/Promo";
import { Resume } from "./components/resume/Resume";
import { Skills } from "./components/skills/Skills";
import "./sass/libs/style.scss";
import { Portfolio } from "./components/portfolio/Portfolio";
import { PriceList } from "./components/priceList/PriceList";
import { Contacts } from "./components/contacts/Contacts";
import { useTouchToggleMenu } from "./hooks/useTouchToggleMenu";
import { ListQuestions } from "./components/listQuestions/ListQuestions";

function App() {
    const [
        addActiveStyle,
        removeActiveStyle,
        activeStyle,
        handleTouchStart,
        handleTouchMove,
    ] = useTouchToggleMenu();

    return (
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <Menu
                activeStyle={activeStyle}
                removeActiveStyle={removeActiveStyle}
            />
            <Aside />
            <Promo addActiveStyle={addActiveStyle} />
            <AboutMe />
            <Resume />
            <Skills />
            <Portfolio />
            <ListQuestions />
            <PriceList />
            <Contacts />
        </div>
    );
}

export default App;
