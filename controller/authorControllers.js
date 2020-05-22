const author = require('../authors.json');
const book = require('../books.json');


exports.showAuthors= async(req,res)=>{
    res.json(author)
}
exports.newAuthor = async(req,res)=>{
    const {name, lastname} = req.body;
    try {
        if(name && lastname){
            const newAuthor = {...req.body};
            author.push(newAuthor);
            res.json({'message':'Author created'});
        }
    } catch (error) {
        console.log(error);
        res.json({'message':'Internal Error'})
    }
}
exports.editAuthor = async (req, res) => {
  const { name, lastname } = req.body;
  console.log(req.params.id);
  author.map((auth) => {
    if (auth.id === req.params.id) {
      auth.name = name;
      auth.lastname = lastname;
      res.json(author);
    }
  });
};
exports.deleteAuthor=async(req,res)=>{
    const _id = req.params.id;
    let deleteauthor = author.filter(auth=>auth.id!==_id);
    let deleteauthorbook =  book.filter(books=>books.authorId !==_id);
    res.json(deleteauthor);
    /* res.json(deleteauthorbook);*/
}