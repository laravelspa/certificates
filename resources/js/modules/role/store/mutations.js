export const SET_CATEGORIES = (state, roles) => {
  state.roles = roles
}

export const SET_CATEGORY = (state, role) => {
  state.role = role
}
export const SET_PAGINATION = (state, meta) => {
  state.pagination.page = meta.current_page
  state.pagination.rowsPerPage = meta.per_page
  state.pagination.rowsNumber = meta.total
}

export const SET_OPTIONS = (state, options) => {
    state.options = options
  }
