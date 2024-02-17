import bcrypt from 'bcrypt';

export const encryptedPassword = async (password) => {
    //Saltos generados
    const salt = await bcrypt.genSalt(12);

    return await bcrypt.hash(password, salt);
};

export const verifyPassword = async (passwordBody, passwordDB) => {
    return await bcrypt.compare(passwordBody, passwordDB);
};
