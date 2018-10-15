import {Task} from './task';

export interface Client {
    firstName: string;
    lastName: string;
    address: string;
    phoneNumbers: string;

    tasks: Task[];
}
