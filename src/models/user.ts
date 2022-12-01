interface userData {
    id: number;
    name: string;
    email: string,
    isActive: boolean,
    roleId: number
}

type usersResponse = {
    data: userData[];
    totalCount: number;
}

type newUser = Omit<userData, 'id'>

export type {
    userData, usersResponse, newUser
};