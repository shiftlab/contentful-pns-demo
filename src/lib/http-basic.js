import {name, version} from '../../package.json';

export function getUnauthorizedResponse(req) {
  return req.auth
    ? ({name: name, status: 'auth-failed', version: version, user: req.auth.user, password: req.auth.password})
    : ({name: name, status: 'auth-failed', version: version, user: '', password: ''});
}
