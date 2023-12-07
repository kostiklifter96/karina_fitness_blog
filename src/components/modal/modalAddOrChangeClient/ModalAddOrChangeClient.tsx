import { RequiredFormChangeOrCreate } from "components/modal/modalAddOrChangeClient/RequiredFormChangeOrCreate";
import { useCreateOrChangeClient } from "hooks/useCreateOrChangeClient";
import { useEffect } from "react";
import { useAppSelector } from "store/store";
import "./modalAddOrChangeClient.scss";

export const ModalAddOrChangeClient = () => {
    const { clientFullInfoFromList } = useAppSelector((state) => state.client);

    const {
        loading,
        setClientId,
        setTextarea,
        setEmail,
        setName,
        setStream,
        setAmount,
        setUID,
        setPaymentStatus,
        setTextForMailer,
        createClient,
        closeModalCreateOrChangeClient,
        updateClient,
    } = useCreateOrChangeClient();

    useEffect(() => {
        if (clientFullInfoFromList !== null) {
            if (
                clientFullInfoFromList.email ||
                clientFullInfoFromList.textarea ||
                clientFullInfoFromList.uid ||
                clientFullInfoFromList.amount ||
                clientFullInfoFromList.paymentStatus ||
                clientFullInfoFromList.name ||
                clientFullInfoFromList.id ||
                clientFullInfoFromList.stream
            ) {
                setTextarea(clientFullInfoFromList.textarea);
                setEmail(clientFullInfoFromList.email);
                setName(clientFullInfoFromList.name);
                setAmount(clientFullInfoFromList.amount);
                setUID(clientFullInfoFromList.uid);
                setPaymentStatus(clientFullInfoFromList.paymentStatus);
                setClientId(clientFullInfoFromList.id);
                setStream(clientFullInfoFromList.stream);
            }
        }
    }, [
        setAmount,
        setClientId,
        setEmail,
        setName,
        setPaymentStatus,
        setTextarea,
        setUID,
        setStream,
        clientFullInfoFromList,
    ]);

    return (
        <div
            className='addClient'
            onClick={() => closeModalCreateOrChangeClient()}
        >
            <div
                className='addClient__section'
                onClick={(e) => e.stopPropagation()}
            >
                <div className='addClient__section-title'>
                    {" "}
                    {clientFullInfoFromList
                        ? `Изменить данные клиента`
                        : `Создать клиента`}
                </div>

                {clientFullInfoFromList ? (
                    <RequiredFormChangeOrCreate
                        clientInfo={clientFullInfoFromList}
                        loading={loading}
                        setAmount={setAmount}
                        setEmail={setEmail}
                        setName={setName}
                        setPaymentStatus={setPaymentStatus}
                        setTextarea={setTextarea}
                        setUID={setUID}
                        setStream={setStream}
                        submitFunc={updateClient}
                    />
                ) : (
                    <RequiredFormChangeOrCreate
                        loading={loading}
                        setAmount={setAmount}
                        setEmail={setEmail}
                        setName={setName}
                        setPaymentStatus={setPaymentStatus}
                        setTextarea={setTextarea}
                        setUID={setUID}
                        setStream={setStream}
                        submitFunc={createClient}
                        setTextForMailer={setTextForMailer}
                    />
                )}
            </div>
        </div>
    );
};
