export const SET_PAGES = (state, certificates) => {
  state.certificates = certificates
}

export const SET_PAGE = (state, certificate) => {
  state.certificate = certificate
}
export const SET_PAGINATION = (state, meta) => {
  state.pagination.certificate = meta.current_certificate
  state.pagination.rowsPerPage = meta.per_certificate
  state.pagination.rowsNumber = meta.total
}

export const SET_OPTIONS = (state, options) => {
    state.options = options
  }
