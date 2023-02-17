import express from 'express';

const authRouter = express.Router();

authRouter.post('/login', () => {});

authRouter.post('/register', () => {});

authRouter.post('/forgotPassword', () => {});

authRouter.post('/resetPassword', () => {});

export default authRouter;
