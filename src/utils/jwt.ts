import jtw from 'jsonwebtoken';

export const generateJtw =(id:string) =>{
    const token = jtw.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '1d'
    } )

}