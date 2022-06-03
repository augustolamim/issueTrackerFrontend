import api from './axios'

const getAllIssues = async () => {
  const res = await api.get('/issues')
  return res.data
}
const createNewIssue = async (title:string, version:string, description:string, issueDeveloperId:string, priority:string) => {
  await api.post('/issues', {
    title,
    version,
    description,
    issueDeveloperId,
    priority
  })
}
const updateIssue = async (title:string, version:string, description:string, issueDeveloperId:string, priority:string, status:string, target:string) => {
  await api.put(target, {
    title,
    version,
    description,
    issueDeveloperId,
    priority,
    status
  })
}
const deleteIssues = async (idsToDelete:number[]) => {
  await api.post('/issues/delete', {
    idsToDelete
  })
}

const IssueService = {
  getAllIssues,
  createNewIssue,
  deleteIssues,
  updateIssue
}
export default IssueService
