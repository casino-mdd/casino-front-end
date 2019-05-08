import request from './RequestWrapper';

function registerSale(saleInfo){
    return request({
        url: 'sale/sell',
        method: 'POST',
        data: saleInfo
    });
}

function getSalesList() {
    return request({
        url: 'sale/listdto',
        method: 'GET',
    });
}

export default {
    registerSale,
    getSalesList
};