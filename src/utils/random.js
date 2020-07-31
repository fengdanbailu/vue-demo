import uuid from 'uuid'

export const getUUID = () => uuid.v4().replace(/-/g, '')

export default {
  getUUID
}
