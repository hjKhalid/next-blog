// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default function handler(req, res) {
  fs.readFile(`blogpost/${req.quary.slug}.json`,'utf-8',(err,data)=>{
    if(err){
      res.status(500).json({error:"internal server problem"})
    }
    console.log(req.quary.slug)
    res.status(200).json(JSON.parse(data))
  })
  // res.status(200).json({ name: 'John Doe' })
}
