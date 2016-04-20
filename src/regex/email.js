/**
 * Function that returns a regex for matching emails.
 *
 * Adapted from https://html.spec.whatwg.org/multipage/forms.html#valid-e-mail-address.
 *
 * @returns {RegExp} - The Regexp object.
 */
export function email() {
  return /^[a-zA-Z0-9.+_\-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
}
