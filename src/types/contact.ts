type phone = {
    id: number;
    phone: string;
    contact: number;
};

export type bank = {
    id: number;
    name: string;
};

export type contact = {
    id: number;
    phones: phone[];
    phone: string;
    banks: bank[];
    first_name: string;
    lst_name: string;
    last_name: string;
    surname: string;
    is_favorite: boolean;
};
