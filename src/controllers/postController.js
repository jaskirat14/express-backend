const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


exports.get_post_by_id = async(req, res)=>{
    const { id } = req.params
    const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    })
    res.json(post)
}

