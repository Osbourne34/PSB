type phone = {
    id: number;
    phone: string;
    contact: number;
};

type bank = {
    id: number;
    name: string;
};

export type contact = {
    id: number;
    phones: phone[];
    banks: bank[];
    first_name: string;
    lst_name: string;
    surname: string;
    is_favorite: boolean;
};
