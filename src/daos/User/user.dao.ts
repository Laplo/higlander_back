import {NameCallerArgsReturnLogDaosInfoLevel, SequelizeConnection} from '@shared';
import {IUser, User} from '@entities';
import {v4String} from 'uuid/interfaces';

export interface IUserDao {
    getAll: () => Promise<IUser[]>;
    getById: (id: v4String) => Promise<IUser | null>;
}

export class UserDao implements IUserDao {
    private userRepository = SequelizeConnection.getInstance().getRepository(User);

    @NameCallerArgsReturnLogDaosInfoLevel('User')
    public async getAll(): Promise<IUser[]> {
        return this.userRepository.findAll();
    }

    @NameCallerArgsReturnLogDaosInfoLevel('User')
    public async getById(id: v4String): Promise<IUser | null> {
        return this.userRepository.findByPk(id.toString());
    }
}
