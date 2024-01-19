import {
    Aside,
    CalorieСalculator,
    Contacts,
    CourseDescription,
    Footer,
    ListQuestions,
    Menu,
    Portfolio,
    Program,
    Promo,
    PromoTraining,
    Resume,
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
            <Menu
                activeStyle={activeStyle}
                removeActiveStyle={removeActiveStyle}
            />
            <Aside />
            <Promo addActiveStyle={addActiveStyle} />
            {/* <Timer /> */}
            <CourseDescription />
            <Program />
            <Resume />
            <Portfolio />
            <PromoTraining />
            <ListQuestions />
            <CalorieСalculator />
            <Contacts />
            <Footer />
        </div>
    );
};
