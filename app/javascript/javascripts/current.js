export default class Current {
  static getMetaContent(name, defaultValue) {
    const meta = document.querySelector(`meta[name=${name}]`)
    if (meta) {
      return meta.content
    } else {
      return defaultValue
    }
  }

  static userId() {
    return this.getMetaContent('current-user-id', null)
  }

  static admin() {
    return this.getMetaContent('current-user-admin', null)
  }

  static locale() {
    return this.getMetaContent('locale', 'en')
  }
}
