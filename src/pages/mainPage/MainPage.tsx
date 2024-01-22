import {
    AboutMe,
    Advantages,
    Aside,
    CalorieСalculator,
    Contacts,
    CourseDescription,
    Footer,
    ListQuestions,
    Menu,
    PanelNavigation,
    Portfolio,
    Program,
    Promo,
    PromoTraining,
    Timer,
} from "components/index";
import { useTouch } from "hooks/useTouch";

export const MainPage = () => {
    const {
        addActiveStyle,
        removeActiveStyle,
        handleTouchMove,
        handleTouchStart,
        activeStyle,
    } = useTouch();

    return (
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <PanelNavigation addActiveStyle={addActiveStyle} />
            <Menu
                activeStyle={activeStyle}
                removeActiveStyle={removeActiveStyle}
            />
            <Aside />
            <Promo />
            <Timer />
            <Program />
            <CourseDescription />
            <Advantages />
            <Portfolio />
            <AboutMe />
            <PromoTraining />
            <ListQuestions />
            <CalorieСalculator />
            <Contacts />
            <Footer />
        </div>
    );
};
