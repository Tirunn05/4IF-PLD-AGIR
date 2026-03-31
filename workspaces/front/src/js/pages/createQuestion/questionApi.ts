import { api } from '../../../api';

export const addQuestion = (question: QuestionProps) => {
    return api.post('/sensibilisation/add', question, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
}

export const loadQuestionCsv = (csv) => {
    const formData = new FormData();
    formData.append('csvFile', csv);

    return api.post('/sensibilisation/csv', formData);
}

export const updateQuestion = (id: number, question: QuestionProps) => {
    return api.post(`/sensibilisation/update?id=${id}`, question, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
    });
}

export const getQuestionById = (id: number) => {
    return api.get(`/sensibilisation/data?id=${id}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export interface QuestionProps {
    language: string;
    description: string;
    responses: string[];
    correct_response: number;
}

export interface QuestionResponse {
    question_id : number;
    correct_response: number;
    contents: Record<string, QuestionContent>;
}

export interface QuestionContent {
    description: string;
    responses: string[];
}


