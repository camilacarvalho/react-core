interface userData {
    id?: number;
    name: string;
    email: string,
    isActive: boolean,
    roleId: number,
    avatar: string
}

type usersResponse = {
    data: userData[];
    totalCount: number;
}

export type {
    userData, usersResponse
};