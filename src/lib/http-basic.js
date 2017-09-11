export function getUnauthorizedResponse(req) {
  return req.auth
    ? ({status: 'authFailed', user: req.auth.user, password: req.auth.password})
    : ({status: 'authFailed', user: '', password: ''});
}
