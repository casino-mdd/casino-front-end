import request from './RequestWrapper';
// NEW
function createTrxSale(saleInfo){
    return request({
        url: 'sale/sell',
        method: 'POST',
        data: saleInfo
    });
}

export default {
    createTrxSale
};