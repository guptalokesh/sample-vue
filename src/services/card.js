import BaseService from './base';

export default class CardsService extends BaseService {

    static getAllCards(query = {}) {
        return super.getAxiosClient()
            .get('/assets/static/cards.json', { params: query })
            .then(res => Promise.resolve(res.data))
            .catch(err => Promise.reject(err));
    }


    static storeCard(data) {
        return super.getAxiosClient().post('/users', data);
    }

}
