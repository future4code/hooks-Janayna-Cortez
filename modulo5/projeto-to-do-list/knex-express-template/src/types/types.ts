export type User = {
    id: string,
    name: string,
    nick_name: string,
    email: string
}

export type EditUser = {
    name: string,
    nick_name: string
}

export type Task = {
    id: string,
    title: string,
    description: string,
    limit_date: Date,
    creator_user_id: string,
    status: string,
}

export type UserTask = {
    id: string,
    name: string,
    nick_name: string,
    title: string,
    description: string,
    status: string,
    limit_date: Date,
    creator_user_id: string
}