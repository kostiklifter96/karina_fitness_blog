import { useEffect } from "react";
import {
    filterClientListByThreads,
    filterClientListByTimeType,
    getNumberOfThreads,
} from "store/reducer/clientReducer";
import { useAppDispatch, useAppSelector } from "store/store";

export const ClientsListInfo = () => {
    const dispatch = useAppDispatch();
    const { sortByTime, filterClientList, clientList, numberOfThreads } =
        useAppSelector((state) => state.client);

    useEffect(() => {
        dispatch(getNumberOfThreads(""));
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
                            onChange={() => {}}
                            value={""}
                        >
                            <option value={"all"}>Все</option>
                            <option value={"paid"}>Оплаченные</option>
                            <option value={"notPaid"}>Не оплаченные</option>
                        </select>
                    </div>
                    <div className='admin-clientList__participants-paid'>
                        <span>Сортировать: </span>{" "}
                        <select
                            className=' admin-clientList__participants-select'
                            onChange={(e) =>
                                dispatch(
                                    filterClientListByTimeType(e.target.value),
                                )
                            }
                            value={sortByTime}
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
