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
    ModalRegistrationClientFromFront,
    PanelNavigation,
    Portfolio,
    Program,
    Promo,
    PromoTraining,
    Timer,
} from "components/index";
import { useTouch } from "hooks/useTouch";
import { useAppSelector } from "store/store";

export const MainPage = () => {
    const statusRegistationClient = useAppSelector(
        (state) => state.admin.statusRegistationClient,
    );
    const {
        addActiveStyle,
        removeActiveStyle,
        handleTouchMove,
        handleTouchStart,
        activeStyle,
    } = useTouch();

    return (
        <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            {statusRegistationClient && <ModalRegistrationClientFromFront />}
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
