import request from './RequestWrapper';

function queryPointsByClient(clientIdentification, userIdentification){
    return request({
        url: 'client/clientpoints/' + clientIdentification + '/' + userIdentification,
        method: 'GET'
    })
}

function fetchExchanges(){
    return request({
        url: 'exchange/listdto',
        method: 'GET'
    });
}

function performExchange(exchangeInfo){
    return request({
        url: 'exchange/exchangeReward',
        method: 'POST',
        data: exchangeInfo
    });
}

export default {
    queryPointsByClient,
    performExchange,
    fetchExchanges
};