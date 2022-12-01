import Redis from "../Repositories/cache";

const saveSession = (id: string, data: any) => {
    try {
        Redis.set(id, "true", process.env.EXPIRED_SESSION || 1800)
        Redis.set(id + ":user", data, process.env.EXPIRED_SESSION || 1800)
    } catch (err) {
        console.log("\n[Erro ao salvar dados no cache]:\n " + err)
        throw err
    }
}

const getSession = async (id: string) => {
    try {
        const authenticated = await Redis.get(id)
        const userData = await Redis.get(id + ":user")
        return (authenticated === "true") ?
            {
                "authenticated": true, ...userData
            } : null
    } catch (err) {
        console.log("\n[Erro ao obter dados no cache]:\n " + err)
        throw err
    }
}

const removeSession = (id: string) => {
    try {
        Redis.del(id)
        Redis.del(id + ":user")
    } catch (err) {
        console.log("\n[Erro ao remover dados no cache]:\n " + err)
        throw err
    }
}


export default {
    saveSession,
    getSession,
    removeSession
}
