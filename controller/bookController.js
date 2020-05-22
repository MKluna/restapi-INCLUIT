const author = require('../authors.json');
const book = require('../books.json');


exports.showBooks=async(req,res)=>{
    res.json(book)
}
exports.newBook=async(req,res)=>{
    const {name, authorId} = req.body;
    author.map((authors)=>{
        if (authorId===authors.id) 
        {
            if (name) 
            {
                const bookNew = {...req.body}
                book.push(bookNew)
                res.json(book)    
            }     
            else
            {
                res.json({'msg':'Internal Error'})
            }
        }
        else
            {
                res.json({'msg':'Internal Error'})
            }
    })
}
exports.editBook=async(req,res)=>{
    const {authorId,name}=req.body;
    book.map((books)=>{
        if (books.id===req.params.id) {
            books.authorId = authorId;
            books.name = name;
            res.json(book)
        }
    })
}
exports.deleteBook=async(req,res)=>{
    const deleteBooks = book.filter(books=>books.id !== req.params.id);
    res.json(deleteBooks);
}