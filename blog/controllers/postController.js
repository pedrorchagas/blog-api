const postService = require('../services/postService');
const validationsService = require('../services/validationService');

/**
 * Essa função controla o fluxo de ação de busca de todos os posts.
 * @param {object} req Objeto da requisição do express
 * @param {res} res Objeto da resposta do express
 * @returns {number}
 */
async function getAllPosts({ req, res }) {
  try {
    const page = Number.parseInt(req.query.page, 10);
    const limit = Number.parseInt(req.query.limit, 10);

    const response = await postService.getAllPosts({
      page,
      limit,
    });

    res.send(response);
  } catch (exception) {
    res.send({ exception });
  }
}


/**
 * Essa função controla o fluxo de ação de busca post pelo ID
 * @param {object} req Objeto da requisição do express
 * @param {res} res Objeto da resposta do express
 * @returns {number}
 */
async function getPostById({ req, res }) {
  try {
    const { id } = req.params;

    validationsService.validatePostId(id);

    const post = await postService.getPostById({
      id,
    });

    res.send({ post });
  } catch (exception) {
    res.code(exception.httpCode).send({
      exception: exception.message,
    });
  }
}


/**
 * Essa função controla o fluxo de ação de criação do post.
 * @param {object} req Objeto da requisição do express
 * @param {res} res Objeto da resposta do express
 * @returns {number}
 */
async function createPost({ req, res }) {
  try {
    const { tittle, header, body } = req.body;

    const post = {
      tittle,
      header,
      body,
      userId: 1, // Aqui deverá puxar o id do usuário por meio do middleware de autenticação
    };

    const newPost = await postService.createPost({ post });

    res.send({ newPost });
  } catch (exception) {
    res.send({
      exception: exception.message,
    });
  }
}

/**
 * Essa função controla o fluxo de ação de edição do post pelo ID.
 * @param {object} req Objeto da requisição do express
 * @param {res} res Objeto da resposta do express
 * @returns {number}
 */
async function editPostById({ res }) {
  try {
    res.send({ ok: 'ok' });
  } catch (exception) {
    res.send({ exception });
  }
}


/**
 * Essa função controla o fluxo de ação de remoção do post pelo ID.
 * @param {object} req Objeto da requisição do express
 * @param {res} res Objeto da resposta do express
 * @returns {number}
 */
async function deleteById({ res }) {
  try {
    res.send({ ok: 'ok' });
  } catch (exception) {
    res.send({ exception });
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  editPostById,
  deleteById,
};
