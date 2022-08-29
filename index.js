import express, { response } from "express";

const app=express();
//interpretar la data en formato json
app.use(express.json())

const people=[];

app.get("/",(request,response)=>{ 
        return response.json({
        ok: true,
        data: people,
    });
});

app.post("/create",function(req,res){
    const data = req.body
    data.id = people.length + 1
    people.push(req.body)

    return res.status(201).json({
        ok: true,
        data:"Persona creada",
    })
})

app.put("/update/:id", function(req,res){
    for (let i = 0; i < people.length; i++) {
        if (people[i].id === req.body.id) {
            people[i].name = req.body.name
            people[i].last_name = req.body.last_name
            people[i].age = req.body.age
            return res.status(200).json({
                ok: true,
                data:"Persona actualizada",
                info: people[i],
            })
          }
    }
})

app.delete("/delete/:id",function(req,res){
    const id = parseInt(req.params.id)
    people.forEach((element,index)=>{
        if(element.id === id){
            people.splice(index, index+1)
        }
    })
    return res.status(200).json({
        ok: true,
        data: "Persona eliminada",
    })
})

app.listen(6004,()=>
console.log('El servidor inicio en http://localhost:6004'))

/**
 * const n1=19;
const n2=10;
//pipe |, or ||
//

console.log(`La suma es: ${n1 + n2}`)
 */
