export interface IAboutMe {
    id: number;
    title: string;
    description: string;
    img: string;
}

export interface IAboutMeItem {
    title: string;
    description: string;
    img: string;
}

export type FormFields = {
    name: HTMLInputElement;
    email: HTMLInputElement;
    textarea: HTMLTextAreaElement;
};

export interface ISendForm {
    e: React.FormEvent<HTMLFormElement & FormFields>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setTextModal: React.Dispatch<React.SetStateAction<string>>;
    setModalActiv: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IListQuestions {
    id: number;
    title: string;
    description: string;
}

export interface IItemListQuestions {
    id: number;
    title: string;
    description: string;
}

export interface ILoader {
    loading: boolean;
}

export interface IMenu {
    activeStyle: boolean;
    removeActiveStyle: () => void;
}

export interface IModalProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    text: string;
}

export interface IPortfolio {
    id?: number;
    href?: string;
    img: string[];
    className: string;
}

export interface IPrice {
    id: number;
    type: string;
    price: string;
    description: string;
}

export interface IProgram {
    id?: number;
    title: string;
    description: string;
    img: string;
}

export interface IPromoHeader {
    addActiveStyle: () => void;
}

export interface IResume {
    id: number;
    universityOrPosition: string;
    aducationOrJob: string;
    description?: string;
    img: string;
}

export interface IAdvantages {
    id: number;
    description: string;
}

export interface IResponse {
    success: boolean;
    message: string;
    statusSendEmail?: boolean;
    logIn?: boolean;
    result?: [] | IClient[];
}

export interface IModalAddClient {
    clientInfo: IClient | null;
}

export interface IClient {
    id: number;
    name: string;
    email: string;
    textarea: string;
    uid: string;
    amount: number;
    stream: number;
    paymentStatus: number;
    telNumber: string;
    paymentToken: string;
    telegram: string;
    textForMailer?: string;
}

export interface ICreateClient {
    name: string;
    email: string;
    textarea: string;
    uid: string;
    amount: number;
    stream: number;
    paymentStatus: number;
    telNumber: string;
    paymentToken: string;
    telegram: string;

    textForMailer?: string;
}

export interface IModalCreatePaymentUrl {
    setPersonalPaymentUrl: React.Dispatch<React.SetStateAction<string>>;
}

export interface IClientListInfo {
    clientList: IClient[];
    filterClientList: IClient[];
    filterClientListByThreads: (r: number) => void;
    sortedClientListInOrder: (p: string) => void;
    sortedClientListByPayment: (p: string) => void;
    streamLength: number[];
}

export interface IClientList {
    handlerModalSendEmailForPersonally: (perImail: string) => void;
    handlerModalChangeClientForPersonally: (info: IClient) => void;
    handleDeleteClient: (id: number) => void;
    handlerModalCreatePayment: (perImail: string) => void;
    loading: boolean;
}

export interface IClientsListItem {
    handlerModalSendEmailForPersonally: (perImail: string) => void;
    handlerModalChangeClientForPersonally: (info: IClient) => void;
    handleDeleteClient: (id: number) => void;
    handlerModalCreatePayment: (perImail: string) => void;
    client: IClient;
    loading: boolean;
}

export interface IFormForChangeOrCreate {
    submitFunc: (e: React.FormEvent<HTMLFormElement>) => void;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setTextarea: React.Dispatch<React.SetStateAction<string>>;
    setUID: React.Dispatch<React.SetStateAction<string>>;
    setAmount: React.Dispatch<React.SetStateAction<number>>;
    setStream: React.Dispatch<React.SetStateAction<number>>;
    setTelegram: React.Dispatch<React.SetStateAction<string>>;
    setTelNumber: React.Dispatch<React.SetStateAction<string>>;
    setPaymentToken: React.Dispatch<React.SetStateAction<string>>;
    setPaymentStatus: React.Dispatch<React.SetStateAction<number>>;
    setTextForMailer?: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    clientInfo?: IClient | null;
}

export interface IClientListControlBtn {
    logOut: () => void;
    handleGetAllClients: () => void;
    handlerModalCreateClient: () => void;
    handlerModalSendEmail: () => void;
    handlerModalCreateNewsletter: () => void;
}
