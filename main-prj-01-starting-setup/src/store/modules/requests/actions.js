export default {
    async contactCoach(context, payload) {
        let newRequest = {
            userEmail: payload.email,
            message: payload.message
        }
        let response = await fetch(`https://vue-http-demo-b6857-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        })

        let responseData = response.json()

        if(!response.ok) {
            let error = new Error(response.message || 'Failed to send request.')
            throw error
        }

        newRequest.id = responseData.name
        newRequest.coachId = payload.coachId

        context.commit('addRequest', newRequest)
    },
    async fetchRequests(context) {
        let coachId = context.rootGetters.userId
        let token = context.rootGetters.token
        let response = await fetch(`https://vue-http-demo-b6857-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json?auth=${token}`)
        let responseData = await response.json()

        if(!response.ok) {
            let error = new Error(response.message || 'Failed to fetch requests.')
            throw error
        }

        let requests = []

        for(let key in responseData) {
            let request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            }
            requests.push(request)
        }

        context.commit('setRequests', requests)
    }
}