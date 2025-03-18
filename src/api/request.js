const memberRequests = {
    fetchMembers : "/v1/members",
    getOne: (id)=> `/v1/member/${id}`,
    create: ()=> `/v1/member/join`,
    update: (id)=> `/v1/member/${id}`,
    delete: (id)=> `/v1/member/${id}`
}

export default memberRequests;