import User from '@models/user'
import {  UserInputError } from 'apollo-server';
import Services from '@utils/helper/destructure'
import Status from '@utils/status'

export default {
    Query: {
        fetchUser: async (_, {email}) => {
            const user = await User.findOne({ email:email });
            return user;
        },
    },

    Mutation: {
        signUp: async (_, { name, email, password }) => {
            
            const is_exist = await User.findOne({email:email});

            if (is_exist) throw new UserInputError('User with email address already exists');

            try {
                const user = new User({
                    name,
                    email,
                    password,
                });

            const is_validEmail = await Services.validateEmail(email)

            if(!is_validEmail){
                throw new UserInputError('Enter a valid email address');
            }
                await user.save();
                return user;
            } catch (error) {
                throw error;
            }
        },

        signIn: async (_, { email, password }) => {

            try {
                const user = await User.findOne({ email: email });
                if (!user) {

                    throw new UserInputError('Enter a valid credentials');

                }
                const isValid = await user.validatePassword(password);
                if (!isValid) {
                     throw new UserInputError('Enter a valid credentials');

                }
                const token = await user.generateAccessToken();
                    const status = Status.success
                    return { token, status };
            } catch (error) {
                return error
            }
        },
    },
};
