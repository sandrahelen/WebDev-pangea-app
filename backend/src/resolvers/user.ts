import {User} from "../models/user.ts";

export default {
    Query: {
        user: async (obj, {username}, context, info) => {
            try {
                return await User.findOne({username: username});
            } catch (e) {
                console.log(e);
                return {};
            }
        },

        users: async () => {
            try {
                return User.find()
            } catch (e) {
                console.log(e);
                return [];
            }
        }

    },
    Mutation: {
        signUp: async (root, {username}, context, info) => {
            try {
                const user = await User.findOne({username: username});
                if(!user){
                    return User.create({username: username, loggedIn: true});
                } else {
                    throw new Error("kan ikke legge til bruker");
                }
            } catch (e){
                throw e;
            }
        },

        signIn: async (root, {username}, context, info) => {
            try {
                const user = await User.findOne({username: username});
                if(user){
                  await User.updateOne({ username: username}, {loggedIn: true})
                    return user
                } else {
                    throw new Error("Kan ikke logge inn bruker, brukernavnet finnes ikke fra før")
                }
            } catch (e){
                throw e;
            }
        },

        signOut: async (root, {username}, context, info) => {
            try {
                const user = await User.findOne({username: username});
                if(user){
                   await User.updateOne({ username: username}, {loggedIn: false})
                    return user.loggedIn;
                } else {
                    throw new Error("Kan ikke logge ut")
                }
            } catch (e){
                throw e;
            }
        }

    }
}
