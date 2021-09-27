export interface UserDocument extends Document {
    id: string;
    _id: string;
    username: string;
    email: string;
    password: string;
    createTime: Date;
    matchPW: any;
}
export declare const User: import("mongoose").Model<UserDocument, {}, {}>;
