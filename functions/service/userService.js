const {collection, doc , addDoc, getDocs} = require('firebase/firestore');
const { db } = require('../config/config');
const User = require('../model/userModel');

const userCollection = collection(db, "Users");

const UserService= {
    add: async (data) => {
        const docRef = await addDoc(userCollection, data);
        return new User(data);
    },
    getAll: async () => {
        const querySnapshot = await getDocs(userCollection);
        const users = [];
        querySnapshot.forEach((doc) => {
            const userData = doc.data(); // Lấy dữ liệu từ tài liệu Firestore
            const user = new User(userData); // Tạo một đối tượng User mới từ dữ liệu Firestore
            users.push(user);
        });
        return users;
    },
}

module.exports = UserService;
