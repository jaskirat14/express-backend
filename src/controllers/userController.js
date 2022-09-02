const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


exports.create_user = async (req, res) => {

    const { name, email, posts } = req.body
  
    const postData = posts
      ? posts.map((post) => {
          return { title: post.title, content: post.content || undefined }
        })
      : []
  
    const result = await prisma.user.create({
      data: {
        name,
        email,
        posts: {
          create: postData,
        },
      },
    })
    res.json(result)
  
  };

exports.get_all_users = async(req, res)=>{
    const users = await prisma.user.findMany()
    res.json(users)
}