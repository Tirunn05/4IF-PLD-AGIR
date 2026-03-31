import { MultipleContentsCard } from "@shared/common/Cards";
import { api } from '../../../api';

const addCard = (card: MultipleContentsCard) => {
    console.log(card);
    return api.post('/card/add', card, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
}

const updateCard = (card: MultipleContentsCard) => {
    console.log(card);
    return api.put('/card/update', card, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
}

const chargeCsv = (file: File) => {
    var data = new FormData()
    data.append('csvFile', file)

    return api.post('/card/csv', data, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
}

const getCardById = (id: string) => {
    return api.get(`/card/id/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
}
  
  
export {
    addCard,
    updateCard,
    chargeCsv,
    getCardById,
};


