import mysql from 'mysql2/promise';
import { NoteController } from '../controllers/note-controller.js';
import { Router } from 'express';
var router = Router();

const noteController = new NoteController();

/* GET notes listing. */
router.get('/', function(req, res, next) {
  noteController.listAll(req, res);
});

router.get('/:id', function(req,res){
  noteController.listOne(req,res);
});

router.post('/', function(req, res) {
  noteController.create(req, res);
}
);

router.delete('/:id', function(req,res){
  noteController.destroy(req,res);
});

router.put('/:id', function(req,res){
    noteController.update(req,res);
});

export default router;

