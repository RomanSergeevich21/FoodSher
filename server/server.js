const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const store = require('session-file-store');
const authRouter = require('./routes/authRouter');
const searchRequestRouter = require('./routes/searchRequestRouter');
const postRouter = require('./routes/postRouter');
const apiFavoritesRouter = require('./routes/apiFavoritesRouter');
const partnersRouter = require('./routes/partnersRouter');
const apiSaveRouter = require('./routes/apiSaveRouter');
const commentsRouter = require('./routes/commentsRouter');
const partnerRequestsRouter = require('./routes/partnerRequestsRouter');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
const app = express();

const FileStore = store(session);

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(cors({ origin: true, credentials: true }));

app.use(session(sessionConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(express.static('products'));
app.use(express.static('public'));

app.use('/partners', partnersRouter);
app.use('/api/user', authRouter);
app.use('/api/searchRequests', searchRequestRouter);
app.use('/api/favorites', apiFavoritesRouter);
app.use('/api/post', postRouter);
app.use('/api/products', apiSaveRouter);
app.use('/api/comments', commentsRouter);
app.use('/api/requests', partnerRequestsRouter);

app.listen(PORT, () => console.log(`Server has started on PORT ${PORT}`));
