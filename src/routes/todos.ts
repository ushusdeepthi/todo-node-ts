import { Router} from 'express'
import {createTodo} from '../controllers/todos'
import {getTodos} from '../controllers/todos'
import {updateTodo} from '../controllers/todos'

const router =Router();

router.post('/', createTodo)
router.get('/', getTodos)
router.patch('/:id',updateTodo)
router.delete('/:id')

export default router;