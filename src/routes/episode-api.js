/* eslint-disable no-useless-constructor */
import { createController } from 'awilix-koa';
import BaseRestApi from './base-api';

class EpisodeRestApi extends BaseRestApi {
    constructor(episodeService) {
        super(episodeService);
    }
}

// Maps routes to method calls on the `api` controller.
// See the `awilix-router-core` docs for info:
// https://github.com/jeffijoe/awilix-router-core
export default createController(EpisodeRestApi)
    .prefix('/api/tv/episodes')
    .get('', 'find')
    .get('/:id', 'get')
    .post('', 'create')
    .patch('/:id', 'update')
    .delete('/:id', 'remove');
