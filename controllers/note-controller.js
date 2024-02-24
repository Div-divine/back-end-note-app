import mysql from 'mysql2/promise';

export class NoteController {
  async listAll(req, res) {
    const dbConnection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'note'
    });

    const [results, fields] = await dbConnection.query('SELECT * FROM notes ORDER BY text');
    res.send(results);
  }

  async listOne(req, res) {
    const dbConnection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'note'
    });
    const sql = 'SELECT text FROM notes WHERE id = ?';
    const [results, fields] = await dbConnection.query(sql, req.params.id);
    res.send(results);
  }

  async create(req, res) {

    const dbConnection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'note'
    });
    const newNote = req.body;
    const sql = 'INSERT INTO notes(text) VALUES (?)';
    const [results, fields] = await dbConnection.query(sql, [newNote.text]);
    res.json(`You added : ${newNote.text}`);
  }

  async destroy(req, res) {

    const dbConnection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'note'
    });
    const sql = 'DELETE FROM notes WHERE id = ?';
    const [results, fields] = await dbConnection.query(sql, [req.params.id]);
    res.json({message : "Note deleted"});
  }

  async update(req, res) {

    const dbConnection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'note'
    });
    const updateNote = req.body;
    const sql = 'UPDATE notes set text = ? WHERE id = ?';
    const [results, fields] = await dbConnection.query(sql, [updateNote.text ,req.params.id]);
    res.json({message : "Note Updated"});
  }
}
