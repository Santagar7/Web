const express = require('express');
const {RenderLoginPage,HandleLogin,Verify} = require('../controllers/login');
const {RenderRegisterPage,HandleRegister} = require('../controllers/register');
const {RenderBudgetsPage,HandleGetBudgets} = require('../controllers/budgets');
const {RenderCreateBudgetPage,CreateBudget} = require('../controllers/create_budget');
const {RenderMenuPage,HandleGetBudgetData} = require('../controllers/menu');
const {RenderActionsPage,HandleMakeAction} = require('../controllers/actions');
const {RenderMembersPage,HandleGetAllMembers} = require('../controllers/members');
const {RenderAddMembersPage,HandleAddMembers} = require('../controllers/add_members');

const router = express.Router();

router.get('/',RenderLoginPage);
router.post('/',HandleLogin);

router.get('/register',RenderRegisterPage);
router.post('/register',HandleRegister);

router.get('/budgets',Verify,RenderBudgetsPage);
router.get('/my_budgets',Verify,HandleGetBudgets);

router.get('/create_budget',Verify,RenderCreateBudgetPage);
router.post('/create_budget',Verify,CreateBudget);

router.get('/menu/:index',Verify,RenderMenuPage);
router.post('/menu/:index',Verify,HandleGetBudgetData);

router.get('/actions/:index',Verify,RenderActionsPage);
router.post('/actions/:index',Verify,HandleMakeAction);

router.get('/members/:index',Verify,RenderMembersPage);
router.post('/members/:index',Verify,HandleGetAllMembers);

router.get('/add_members/:index',Verify,RenderAddMembersPage);
router.post('/add_members/:index',Verify,HandleAddMembers);

module.exports = router;