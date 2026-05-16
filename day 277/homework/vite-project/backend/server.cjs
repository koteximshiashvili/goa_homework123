const express=require("express")
const Database=require("better-sqlite3")
const cors=require("cors")
const app=express()
app.use(express.json())
app.use(cors())
const db=new Database("tasks.db")

db.exec(`
    CREATE TABLE IF NOT EXISTS tasks(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    status TEXT,
    created_at CURRENT_TIMESTAMP
    ); 

    CREATE TABLE IF NOT EXISTS task_history(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task_id INTEGER,
    title TEXT,
    action_type TEXT,
    action_time CURRENT_TIMESTAMP
    );

    CREATE TRIGGER IF NOT EXISTS task_completed
    AFTER UPDATE ON tasks
    WHEN NEW.status='completed'
    BEGIN
    INSERT INTO task_history(task_id,title,action_type)
    VALUES(OLD.id,OLD.title,'completed');
    DELETE FROM tasks WHERE id=OLD.id;
    END;

    CREATE TRIGGER IF NOT EXISTS task_deleted
    AFTER DELETE ON tasks
    BEGIN
    INSERT INTO task_history(task_id,title,action_type)
    VALUES(OLD.id,OLD.title,'deleted');
    END;
`)

app.get("/tasks",(req,res)=>{
    const tasks=db.prepare("SELECT * FROM tasks").all()
    res.json(tasks)
})

app.post("/tasks",(req,res)=>{
    const{title}=req.body
    db.prepare("INSERT INTO tasks(title) VALUES(?)").run(title)
    res.send("ok")
})

app.put("/tasks/:id",(req,res)=>{
    const id=req.params.id
    const{title,status}=req.body
    db.prepare("UPDATE tasks SET title=?,status=? WHERE id=?").run(title,status,id)
    res.send("ok")
})

app.delete("/tasks/:id",(req,res)=>{
    const id=req.params.id
    db.prepare("DELETE FROM tasks WHERE id=?").run(id)
    res.send("ok")
})

app.get("/history",(req,res)=>{
    const data=db.prepare("SELECT * FROM task_history").all()
    res.json(data)
})

app.listen(6967)