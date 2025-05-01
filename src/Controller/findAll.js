import prismadb from "../Service/prisma"


async function getUsers() {
    try {
        const users = await prismadb.usuarios.findMany()
        if (users) {
            return users
        }
    } catch (error){
        console.log(error)
    }
}

export { getUsers }