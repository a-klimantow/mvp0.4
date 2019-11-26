export const correctedDefault = data => data.data.successResponse

export const correctedForAllTasksPage = data => {
  // const pathname = window.location.pathname
  // const res = correctedDefault(data)
  const { items } = data
  const withLink = items.map(item => ({
    ...item,
    link: `/tasks/current/${item.id}`
  }))
  return { ...data, items: withLink }
}
