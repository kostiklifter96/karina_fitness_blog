import { useEffect } from "react";
import {
    filterClientListByPaymentTime,
    filterClientListByStatusPayment,
    filterClientListByThreads,
    getNumberOfThreadsForSelectList,
} from "store/reducer/clientReducer";
import { useAppDispatch, useAppSelector } from "store/store";

export const ClientsListInfo = () => {
    const dispatch = useAppDispatch();

    const {
        sortByPaymentTime,
        statusPayment,
        filterClientList,
        clientList,
        numberOfThreads,
    } = useAppSelector((state) => state.client);

    useEffect(() => {
        dispatch(getNumberOfThreadsForSelectList(""));
        dispatch(filterClientListByThreads(-1));
    }, [dispatch]);

    return (
        <>
            <div className='admin-clientList__participants'>
                <div>
                    <div className='admin-clientList__participants-full'>
                        <span>Общее колличесво: </span> {clientList.length}
                    </div>{" "}
                    <div className='admin-clientList__participants-full'>
                        <span>Оплативших: </span>{" "}
                        {
                            filterClientList.filter(
                                (el) => el.paymentStatus === 1,
                            ).length
                        }
                    </div>
                    <div className='admin-clientList__participants-full'>
                        <span>Не оплативших: </span>{" "}
                        {
                            filterClientList.filter(
                                (el) => el.paymentStatus === 0,
                            ).length
                        }
                    </div>
                </div>

                <div>
                    <div className='admin-clientList__participants-paid'>
                        <span>Поток: </span>{" "}
                        <select
                            className=' admin-clientList__participants-select'
                            onChange={(e) =>
                                dispatch(
                                    filterClientListByThreads(+e.target.value),
                                )
                            }
                        >
                            <option value={-1}>Все</option>
                            {numberOfThreads.map((el) => (
                                <option key={el} value={el}>
                                    {el} поток
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className='admin-clientList__participants-paid'>
                        <span>Оплата: </span>{" "}
                        <select
                            className=' admin-clientList__participants-select'
                            onChange={(e) => {
                                dispatch(
                                    filterClientListByStatusPayment(
                                        +e.target.value,
                                    ),
                                );
                            }}
                            value={statusPayment}
                        >
                            <option value={-1}>Все</option>
                            <option value={1}>Оплаченные</option>
                            <option value={0}>Не оплаченные</option>
                        </select>
                    </div>
                    <div className='admin-clientList__participants-paid'>
                        <span>Сортировать: </span>{" "}
                        <select
                            className=' admin-clientList__participants-select'
                            onChange={(e) =>
                                dispatch(
                                    filterClientListByPaymentTime(
                                        e.target.value,
                                    ),
                                )
                            }
                            value={sortByPaymentTime}
                        >
                            <option value={"old"}>Сначала старые</option>
                            <option value={"new"}>Сначала новые</option>
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
};
