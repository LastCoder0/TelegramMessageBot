const dotenv = require('dotenv').config();
var bodyParser = require('body-parser');
const express = require('express');
const ejs = require('ejs');
const path =require('path');
const app = express();
const sourceFile =require('./data');
const singleFileUpload = require('./multer');
app.use(express.json());


app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views',path.resolve(__dirname,'./src/views'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',async (req,res)=> {
 
  //Send message to other users I click here      
    res.render('index');
});

app.post('/',async (req,res)=> {
    //Picture Add
    singleFileUpload(req,res,async function (err){
       if(err){
          console.log("Hatali",err);
       }
       else {
         const uyeKisi = sourceFile.client;
       const Api = sourceFile.Api;
       const aranacak = "\r\n";
       const listGroup = req.body.listGroup;
       const tosendText = req.body.tosendText;
       const space = listGroup.indexOf(aranacak);
       let myArr;
       let newArr =[];
       if(space==-1){
           myArr = listGroup.split(" ");
             for(let i=0;i<myArr.length;i++){
              newArr.push(myArr[i].slice(1));
             }

       }else {
           myArr = listGroup.split("\r\n");
           for(let i=0;i<myArr.length;i++){
            newArr.push(myArr[i].slice(1));
      }
         console.log(myArr[2]);
       }
console.log(newArr);
const filename = req.file.filename;
const dateTime = req.body.minute;
          let Sure =1000*dateTime;
            newArr.forEach(async (element,index) => {
                  
             setInterval( ()=> {
               try {
                 uyeKisi.sendFile(element, {file:'./uploads/'+filename, caption:tosendText})

               }
               catch(e){
                 console.log(e);
                  uyeKisi.sendFile(element, {file:'./uploads/'+filename, caption:tosendText})

               }

               },Sure);



       
          });
       res.status(200);
  



       }

       });

     
//        
//       const result = await uyeKisi.invoke(
//    new Api.messages.SendMultiMedia({
//     peer: element ,
//     multiMedia: [
//       new Api.InputSingleMedia({
//         media: new Api.InputMediaUploadedPhoto({
//           file: uyeKisi.uploadFile("./uploads/file785c2544-bdc4-4678-ad7b-bdb85cfe94d3sorry.jpg"),
//           stickers: [
//             new Api.InputDocument({
//               id: random,
//               accessHash: random,
//               fileReference: Buffer.from("arbitrary data here"),
//             }),
//           ],
//           ttlSeconds: 43,
//         }),
//         randomId: random,
//         message: "This is bot message",
//       }),
//     ],
//     scheduleDate: 43,
//   })
// );
// console.log(result); // prints the result
//      });

    
});


app.listen(process.env.PORT,()=> {
    console.log(`Server ${process.env.PORT} ayaklandi`);
});
