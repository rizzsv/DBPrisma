import express, { response } from "express"
import "dotenv/config"
import { Prisma, PrismaClient } from "@prisma/client"
const app = express();
app.use(express.urlencoded({ extended: true }))
const prisma = new PrismaClient()
const PORT = 3306;

//FUNCTION
app.post("/user", async(req, res)=>{
    try {
        const {username, password} = req.body;
        const user = await prisma.user.create({
            data: {
                username, password
            }
        })

        res.send(user)

    }catch(error){
        console.log(error);
    }
});
//function listen untuk cek bahwa app berhasil
app.listen(PORT, ()=>{
    console.log(`Running on http: //localhost : ${PORT}`)
})

